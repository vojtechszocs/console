import * as React from 'react';
import { connect } from 'react-redux';
import { Formik } from 'formik';

import {
  Extension,
  connectToExtensions,
  Perspective,
  isPerspective,
} from '@console/plugin-sdk';

import { history, AsyncComponent } from '@console/internal/components/utils';
import { getActivePerspective } from '@console/internal/reducers/ui';
import { RootState } from '@console/internal/redux';
import { NormalizedBuilderImages, normalizeBuilderImages } from '../../utils/imagestream-utils';
import { GitImportFormData, FirehoseList, ImportData } from './import-types';
import { createResources } from './import-submit-utils';
import { validationSchema } from './import-validation-utils';

interface ImportFormProps {
  namespace: string;
  importData: ImportData;
  imageStreams?: FirehoseList;
}

interface StateProps {
  perspective: string;
}

interface ExtensionProps {
  pluginPerspectives: Perspective[];
}

const ImportForm: React.FC<ImportFormProps & StateProps & ExtensionProps> = ({
  namespace,
  imageStreams,
  importData,
  perspective,
  pluginPerspectives,
}) => {
  const initialValues: GitImportFormData = {
    name: '',
    project: {
      name: namespace || '',
    },
    application: {
      name: '',
      selectedKey: '',
    },
    git: {
      url: '',
      type: '',
      ref: '',
      dir: '/',
      showGitType: false,
      secret: '',
    },
    docker: {
      dockerfilePath: 'Dockerfile',
      containerPort: 8080,
    },
    image: {
      selected: '',
      recommended: '',
      tag: '',
      tagObj: {},
      ports: [],
    },
    route: {
      create: true,
      targetPort: '',
      path: '',
      hostname: '',
      secure: false,
      tls: {
        termination: '',
        insecureEdgeTerminationPolicy: '',
        caCertificate: '',
        certificate: '',
        destinationCACertificate: '',
        privateKey: '',
      },
    },
    serverlessRoute: {
      targetPort: '',
    },
    serverless: {
      enabled: false,
      scaling: {
        minpods: 0,
        maxpods: '',
        concurrencytarget: '',
        concurrencylimit: '',
      },
    },
    build: {
      env: [],
      triggers: {
        webhook: true,
        image: true,
        config: true,
      },
      strategy: importData.buildStrategy || 'Source',
    },
    deployment: {
      env: [],
      triggers: {
        image: true,
        config: true,
      },
      replicas: 1,
    },
    labels: {},
    limits: {
      cpu: {
        request: null,
        requestUnit: 'm',
        limit: null,
        limitUnit: 'm',
      },
      memory: {
        request: null,
        requestUnit: 'Mi',
        limit: null,
        limitUnit: 'Mi',
      },
    },
  };
  const builderImages: NormalizedBuilderImages =
    imageStreams && imageStreams.loaded && normalizeBuilderImages(imageStreams.data);

  const handleRedirect = (project: string) => {
    const perspectiveData = pluginPerspectives.find((item) => item.properties.id === perspective);
    const redirectURL = perspectiveData.properties.getImportRedirectURL(project);
    history.push(redirectURL);
  };

  const handleSubmit = (values, actions) => {
    const imageStream = builderImages && builderImages[values.image.selected].obj;

    const {
      project: { name: projectName },
    } = values;

    createResources(values, imageStream, true)
      .then(() => createResources(values, imageStream))
      .then(() => {
        actions.setSubmitting(false);
        handleRedirect(projectName);
      })
      .catch((err) => {
        actions.setSubmitting(false);
        actions.setStatus({ submitError: err.message });
      });
  };

  const renderForm = (props) => (
    <AsyncComponent {...props} builderImages={builderImages} loader={importData.loader} />
  );

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      onReset={history.goBack}
      validationSchema={validationSchema}
      render={renderForm}
    />
  );
};

const mapStateToProps = (state: RootState): StateProps => ({
  perspective: getActivePerspective(state),
});

const mapExtensionsToProps = (extensions: Extension[]) => ({
  pluginPerspectives: extensions.filter(isPerspective),
});

export default connect(mapStateToProps)(
  connectToExtensions<ExtensionProps, ImportFormProps>(mapExtensionsToProps)(ImportForm)
);
