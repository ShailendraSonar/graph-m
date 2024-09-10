const initialNodes = [
  {
    id: '1',
    type: 'customNode',
    data: {
      title: 'proxy_server.py',
      method: 'chat_completion',
      libs: ['Request', 'Response'],
      params: ['request', 'fastapi_response'],
      responseObject: '',
    },
    position: { x: 100, y: 200 },
  },
  {
    id: '2',
    type: 'customNode',
    data: {
      title: 'proxy_server.py',
      method: 'load_team_config',
      libs: ['str'],
      params: ['self', 'team_id'],
      responseObject: '',
    },
    position: { x: 700, y: -200 },
  },
  {
    id: '3',
    type: 'customNode',
    data: {
      title: 'proxy_server.py',
      method: 'get_config',
      libs: [],
      params: ['self'],
      responseObject: 'dict',
    },
    position: { x: 700, y: 600 },
  },
  {
    id: '4',
    type: 'customNode',
    data: {
      title: 'utils.py',
      method: 'update_spend',
      libs: ['PrismaClient', 'Optional[HTTPHandler]', 'ProxyLogging'],
      params: ['prisma_client', 'db_writer_client', 'proxy_logging_obj'],
      responseObject: '',
    },
    position: { x: 1500, y: -450 },
  },
  {
    id: '5',
    type: 'customNode',
    data: {
      title: 'utils.py',
      method: 'print_verbose',
      libs: [],
      params: ['print_statement'],
      responseObject: '',
    },
    position: { x: 1500, y: -200 },
  },
  {
    id: '6',
    type: 'customNode',
    data: {
      title: 'proxy_server.py',
      method: 'parse_cache_control',
      libs: [],
      params: ['cache_control'],
      responseObject: '',
    },
    position: { x: 1500, y: 50 },
  },
  {
    id: '7',
    type: 'customNode',
    data: {
      title: 'proxy_server.py',
      method: 'select_data_generator',
      libs: [],
      params: ['response', 'user_api_key_dict'],
      responseObject: '',
    },
    position: { x: 1500, y: 400 },
  },
  {
    id: '8',
    type: 'customNode',
    data: {
      title: 'utils.py',
      method: 'ProxyLogging.post_call_failure_hook',
      libs: ['Exception', 'UserAPIKeyAuth'],
      params: ['self', 'original_exception', 'user_api_key_dict'],
      responseObject: '',
    },
    position: { x: 1500, y: 650 },
  },
  {
    id: '9',
    type: 'customNode',
    data: {
      title: 'utils.py',
      method: 'ProxyLogging.alerting_handler',
      libs: ['str', 'Literal'],
      params: ['self', 'message', 'level', 'alert_type'],
      responseObject: '',
    },
    position: { x: 1500, y: 900 },
  },
];

export default initialNodes;
