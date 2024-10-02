export const eventingPO = {
  createEventDropDownMenu: '[data-test-id="dropdown-button"]',
  createEventSource: '[data-test-dropdown-menu="eventSource"]',
  createKnativeEvent: '[data-test="item knative-event-source"]',
  yamlEditor: 'div.monaco-scrollable-element.editor-scrollable.vs-dark',
  catlogTiles: '.odc-catalog-tile',
  yamlView: '[data-test="yaml-view-input"]',
  formView: '[data-test="form-view-input"]',
  eventSourceCard: '[data-test="item knative-event-source"]',
  brokerCard: '[data-test="item knative-eventing-broker"]',
  createCatalog: '.co-catalog-page__overlay-actions',
  radioButtonresourceURI: '[id="form-radiobutton-formData-sinkType-uri-field"]',
  resourceURI: '[id="form-input-formData-sink-uri-field"]',
  createConnector: '[data-test=save-changes]',
  submit: '[data-test-id="submit-button"]',
  nodeLink: '[data-test-id="edge-handler"]',
  catalogProviderRedHat: '[data-test="provider-red-hat"] input[type=checkbox]',
  bootstrapServers: '[aria-label="Bootstrap servers"]',
  awsSqsSource: {
    accessKey: '[id="root_accessKey"]',
    queueName: '[id="root_queueNameOrArn"]',
    region: '[id="root_region"]',
    secretKey: '[id="root_secretKey"]',
  },
  saleforceSource: {
    clientId: '[id="root_clientId"]',
    clientSecret: '[id="root_clientSecret"]',
    password: '[id="root_password"]',
    query: '[id="root_query"]',
    topicName: '[id="root_topicName"]',
    userName: '[id="root_userName"]',
  },
  jiraSource: {
    jiraURL: '[id="root_jiraUrl"]',
    password: '[id="root_password"]',
    userName: '[id="root_username"]',
    jql: '[id="root_jql"]',
  },
  telegramSource: {
    authToken: '[id="root_authorizationToken"]',
  },
  slackSource: {
    channel: '[id="root_channel"]',
    token: '[id="root_token"]',
  },
  awsKinesisSource: {
    accessKey: '[id="root_accessKey"]',
    region: '[id="root_region"]',
    secretKey: '[id="root_secretKey"]',
    stream: '[id="root_stream"]',
  },
  createSidebar: '.co-catalog-page__overlay-actions',
  pingSource: {
    create: '[data-test="EventSource-PingSource"]',
    dataField: '#form-input-formData-data-PingSource-data-field',
    scheduleField: '#form-input-formData-data-PingSource-schedule-field',
    resource: '#form-ns-dropdown-formData-sink-key-field',
    resourceFilter: '[data-test-id="dropdown-text-filter"]',
    resourceItem: '[data-test="dropdown-menu-item-link"]',
    submit: '[data-test-id="submit-button"]',
    details: '[data-test-id="ping-source"]',
    save: '[data-test="save-changes"]',
  },
  apiServerSource: {
    create: '[data-test="EventSource-ApiServerSource"]',
    apiVersionField: '[data-test="pairs-list-name"]',
    kindField: '[data-test="pairs-list-value"]',
    resource: '#form-ns-dropdown-formData-sink-key-field',
    resourceItem: '[data-test="dropdown-menu-item-link"]',
    submit: '[data-test-id="submit-button"]',
    details: '[id="sources.knative.dev~v1~ApiServerSource"]',
  },
  sinkBinding: {
    create: '[data-test="EventSource-SinkBinding"]',
    apiVersionField: '[data-test-id="sinkbinding-apiversion-field"]',
    kindField: '[data-test-id="sinkbinding-kind-field"]',
    resource: '#form-ns-dropdown-formData-sink-key-field',
    resourceItem: '[data-test="dropdown-menu-item-link"]',
    submit: '[data-test-id="submit-button"]',
    details: '[id="sources.knative.dev~v1~SinkBinding"]',
  },
  containerSource: {
    create: '[data-test="EventSource-ContainerSource"]',
    imageField: '[data-test-id="container-image-field"]',
    resource: '#form-ns-dropdown-formData-sink-key-field',
    resourceItem: '[data-test="dropdown-menu-item-link"]',
    submit: '[data-test-id="submit-button"]',
    details: '[id="sources.knative.dev~v1~ContainerSource"]',
  },
  channel: {
    namespaceResource: '.co-resource-item__resource-name',
    channelName: '[data-test-selector="details-item-value__Name"]',
    selectChannel: '[id="form-dropdown-formData-type-field"]',
    yamlEditor: '.yaml-editor',
    applicationInput: '[data-test-id="application-form-app-input"]',
    yamlView: '[id="form-radiobutton-editorType-yaml-field"]',
    createChannel: '[data-test-dropdown-menu="channels"]',
    eventSourceNodeLink: '[data-type="event-source-link"]',
    edgeLink: '[data-type="event-pubsub-link"]',
    nodeLabel: '.pf-topology__node__label',
    dropDownMenu: '[data-test-id="dropdown-menu"]',
    ownerDetails: '[data-test-selector="details-item-value__Owner"]',
    timeStamp: '[data-test="timestamp"]',
    applicationDropDown: '[id="form-dropdown-application-name-field"]',
    labelTagsInput: '.tags',
    labelList: '[data-test="label-list"]',
    addAnnotations: '[data-test="add-button"]',
    editAnnotations: '[data-test="edit-annotations"]',
    keyAnnotations: '[placeholder="Key"]',
    valueAnnotations: '[placeholder="Value"]',
    sidebarTab: '.co-m-horizontal-nav__menu-item',
    sidebarClose: '[data-test-id="sidebar-close-button"]',
    applicationItem: '[data-test=dropdown-menu-item-link]',
    subscriberInput: '[id="form-ns-dropdown-spec-subscriber-ref-name-field"]',
    subscriberResource: '.kn-event-subscriber-list-item',
    details: '[data-test-id="channel"]',
    submit: '[data-test="save-changes"]',
    save: '[data-test="confirm-action"]',
    resourceItem: '.co-resource-item',
    typeField: '[id="form-dropdown-formData-type-field"]',
    typeFieldMenu: '[data-test-id="dropdown-menu"]',
    name: '[data-test-id="channel-name"]',
    create: '[data-test-id="submit-button"]',
    contextMenu: 'div.odc-topology-context-menu',
    contextMenuItem: '[role="menuitem"]',
    tab: '[data-test-id="horizontal-link-Channels"]',
    channelfilter: '[data-test-row-filter="channel"]',
    inmemorychannelfilter: '[data-test-row-filter="inmemorychannel"]',
    createDropDownDefaultChannel: '[data-test-dropdown-menu="messaging.knative.dev~v1~Channel"]',
    createDropDownInMemoryChannel:
      '[data-test-dropdown-menu="messaging.knative.dev~v1~InMemoryChannel"]',
  },
  broker: {
    actionDropDown: '.pf-v5-c-menu__list-item',
    actionMenu: '[data-test-id="actions-menu-button"]',
    formView: '[id="form-radiobutton-editorType-form-field"]',
    eventingCard: '[data-test="card eventing"]',
    createEvent: '[data-test="item knative-eventing-broker"]',
    create: '[data-test=save-changes]',
    label: '.tags',
    labelList: '[data-test="label-list"]',
    topologyNode: '[class="pf-topology__node__label"]',
    confirm: '[data-test="confirm-action"]',
    addAnnotations: '[data-test="add-button"]',
    editAnnotations: '[data-test="edit-annotations"]',
    annotationName: '[data-test="pairs-list-name"]',
    annotationValue: '[data-test="pairs-list-value"]',
    sidebar: {
      owners: '[data-test="Owner"]',
      createdAt: '[data-test="Created at"]',
      labels: '[data-test="Labels"]',
      annotations: '[data-test="Annotations"]',
      heading: '.sidebar__section-heading',
      navBar: '.co-m-horizontal-nav__menu-item',
      dropdownMenu: '.pf-v5-c-dropdown__menu-item',
      resource: '.co-resource-item__resource-name',
      close: '[data-test-id="sidebar-close-button"]',
      triggerName: '[id="form-input-metadata-name-field"]',
      subscriberDropDown: '[id="form-ns-dropdown-spec-subscriber-ref-name-field"]',
      subscriberFilter: '[data-test-id="dropdown-text-filter"]',
      subscriberItem: '[data-test="dropdown-menu-item-link"]',
    },
    applicationGrouping: {
      dropdown: '[id="form-dropdown-application-name-field"]',
      nameField: '[data-test-id="application-form-app-name"]',
      formData: '[id="form-input-formData-application-name-field"]',
      create: '[id="#CREATE_APPLICATION_KEY#-link"]',
      menu: '[class="pf-v5-c-dropdown__menu-item"]',
      nameForm: '[id="form-input-application-name-field"]',
    },
  },
  catalogSidebarCreateButton: 'a[role="button"]',
  message: '[data-test="empty-message"]',
  pageDetails: '[aria-label="Breadcrumb"]',
  eventSourcesTab: '[data-test-id="horizontal-link-Event Sources"]',
  brokersTab: '[data-test-id="horizontal-link-Brokers"]',
  triggersTab: '[data-test-id="horizontal-link-Triggers"]',
  channelsTab: '[data-test-id="horizontal-link-Channels"]',
  subscriptionsTab: '[data-test-id="horizontal-link-Subscriptions"]',
  filter: {
    ToggleButton: '[data-test-id="filter-dropdown-toggle"]',
    Input: '[data-test="name-filter-input"]',
    labelInput: '[data-test-id="item-filter"]',
    Toolbar: '[data-test="filter-toolbar"]',
    TypeMenu: '[data-test-id="dropdown-button"]',
    Type: '[data-test-id="dropdown-menu"]',
    count: '.pf-v5-c-badge',
    item: '.co-filter-dropdown-item__name',
    apiserversource: '[data-test-row-filter="apiserversource"]',
    containersource: '[data-test-row-filter="containersource"]',
    pingsource: '[data-test-row-filter="pingsource"]',
    sinkbinding: '[data-test-row-filter="sinkbinding"]',
    labelSuggestion: '.co-suggestion-line',
    checkbox: '.pf-v5-c-check__input',
  },
  resourceIcon: '.co-m-resource-icon',
  resourceType: '[data-test-rows="resource-row"]',
  kafka: {
    amqStreams: '[data-test-operator-row="Red Hat Integration - AMQ Streams"]',
    kafkaLink: '[data-test-id="horizontal-link-Kafka"]',
    createItem: '[data-test="item-create"]',
    resourceTitle: '[data-test-id="resource-title"]',
    createForm: '[data-test="create-dynamic-form"]',
    filter: '[data-test="name-filter-input"]',
    status: '[data-test="status-text"]',
    kafkaTopicLink: '[data-test-id="horizontal-link-Kafka Topic"]',
    kafkaSource: '[data-test="EventSource-KafkaSource"]',
    modalHeader: '.odc-catalog-details-modal__header',
    bootstrapServerDropdown: '#form-select-input-formData-data-KafkaSource-bootstrapServers-field',
    topicsDropdown: '#form-select-input-formData-data-KafkaSource-topics-field',
    dropdownList: '[role="listbox"]',
    dropdownOptions: '[role="option"]',
    targetResource: '#form-ns-dropdown-formData-sink-key-field',
    applicationName: '#form-dropdown-application-name-field',
    bootstrapServer: '[aria-label="Bootstrap servers"]',
    topics: '[aria-label="Topics"]',
  },
  kafkaSource: {
    submitBtn: '[data-test-id="submit-button"]',
    sasl: '[data-test-id="kafkasource-sasl-field"]',
    tls: '[data-test-id="kafkasource-tls-field"]',
    toggleText: '[class="pf-v5-c-dropdown__toggle-text"]',
    dropdownInput: '[data-test-id="dropdown-text-filter"]',
    rhSecret: '[id="rh-cloud--services-service-account:secretKeyRef-link"]',
    appDropdown: '#form-dropdown-application-name-field',
    noApp: '[id="#UNASSIGNED_APP#-link"]',
    appName: '[data-test-id="application-form-app-name"]',
    eventSourceLink: '[data-type="event-source-link"]',
    headingTitle: '.resource-overview__heading',
    listItem: '.list-group-item',
  },
  eventSource: {
    camelK: '[data-test-operator-row="Red Hat Integration - Camel K"]',
    integrationPlatform: '[data-test-id="horizontal-link-Integration Platform"]',
    create: '[data-test="item-create"]',
    name: '[id="root_metadata_name"]',
    submit: '[data-test="create-dynamic-form"]',
    searchCatalog: '[data-test="search-catalog"]',
    eventSourceCard: '[data-test="item knative-event-source"]',
  },
};

export const servingPO = {
  create: '[data-test="save-changes"]',
  servicesTab: '[data-test-id="horizontal-link-Services"]',
  revisionsTab: '[data-test-id="horizontal-link-Revisions"]',
  routesTab: '[data-test-id="horizontal-link-Routes"]',
  pageDetails: '[aria-label="Breadcrumb"]',
  resourceName: '.co-resource-item__resource-name',
  createService: '[data-test-dropdown-menu="service"]',
  kebabButton: '[data-test-id="kebab-button"]',
  filter: {
    Input: '[data-test="name-filter-input"]',
    Toolbar: '[data-test="filter-toolbar"]',
    TypeMenu: '[data-test-id="dropdown-button"]',
    Type: '[data-test-id="dropdown-menu"]',
    item: '.co-filter-dropdown-item__name',
    count: '.pf-v5-c-badge',
    ToggleButton: '[data-test-id="filter-dropdown-toggle"]',
    channel: '[data-test-row-filter="channel"]',
    inmemorychannel: '[data-test-row-filter="inmemorychannel"]',
  },
};

export const hpaPO = {
  addHPA: '[data-test-action="Add HorizontalPodAutoscaler"]',
  minhpaPod: '[id="form-number-spinner-formData-spec-minReplicas-field"]',
  maxhpaPod: '[id="form-number-spinner-formData-spec-maxReplicas-field"]',
  cpu: '[id="cpu"]',
  memory: '[id="memory"]',
};

export const domainPO = {
  domainMapping: '[aria-label="Domain mapping"]',
  chipGroup: '.pf-m-typeahead [id*="select-multi-typeahead-"]',
  contentScroll: '[id="content-scrollable"]',
  removeLabel: '[aria-label="Remove"]',
  menuToggle: '.pf-m-typeahead [aria-label="Menu toggle"]',
};
