/**
 * Qoder CN API constants — 中国版
 *
 * Endpoint set:
 *   openapi.qoder.com.cn   - device flow + userinfo + quota usage
 *   api3.qoder.com.cn      - inference (chat) + model list, requires COSY signing
 *   qoder.com.cn/device     - browser landing page for device authorization
 */

// 注意：api3.qoder.com.cn SSL证书有自签名问题，需设置 NODE_TLS_REJECT_UNAUTHORIZED=0

export const QODER_OPENAPI_BASE = "https://openapi.qoder.com.cn";
export const QODER_CENTER_BASE = "https://openapi.qoder.com.cn";
export const QODER_CHAT_BASE = "https://api3.qoder.com.cn";

export const QODER_LOGIN_URL = "https://qoder.com.cn/device/selectAccounts";

// Device flow endpoints
export const QODER_DEVICE_TOKEN_URL = `${QODER_OPENAPI_BASE}/api/v1/deviceToken/poll`;
export const QODER_USERINFO_URL = `${QODER_OPENAPI_BASE}/api/v1/userinfo`;
export const QODER_QUOTA_USAGE_URL = `${QODER_OPENAPI_BASE}/api/v2/quota/usage`;
export const QODER_REFRESH_TOKEN_URL = `${QODER_CENTER_BASE}/algo/api/v3/user/refresh_token`;

// Inference endpoints (under /algo on api3.qoder.com.cn, all COSY-signed)
export const QODER_CHAT_SIG_PATH = "/api/v2/service/pro/sse/agent_chat_generation";
export const QODER_CHAT_URL = `${QODER_CHAT_BASE}/algo${QODER_CHAT_SIG_PATH}?FetchKeys=llm_model_result&AgentId=agent_common`;
export const QODER_CHAT_URL_ENCODED = `${QODER_CHAT_URL}&Encode=1`;
export const QODER_MODEL_LIST_URL = `${QODER_CHAT_BASE}/algo/api/v2/model/list`;

// COSY header constants
export const QODER_IDE_VERSION = "1.0.0";
export const QODER_CLIENT_TYPE = "5";
export const QODER_DATA_POLICY = "disagree";
export const QODER_LOGIN_VERSION = "v2";
export const QODER_MACHINE_OS = "x86_64_windows";
export const QODER_MACHINE_TYPE = "5";

// Canonical model identifiers
export const QODER_MODEL_MAP = {
  auto: "auto",
  ultimate: "ultimate",
  performance: "performance",
  efficient: "efficient",
  lite: "lite",
  qmodel: "qmodel",
  qmodel_latest: "qmodel_latest",
  dmodel: "dmodel",
  dfmodel: "dfmodel",
  gm51model: "gm51model",
  kmodel: "kmodel",
  mmodel: "mmodel",
};

// RSA public key for COSY encryption
// 先用国际版的，后续验证中国版是否不同
export const QODER_RSA_PUBLIC_KEY = `-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDA8iMH5c02LilrsERw9t6Pv5Nc
4k6Pz1EaDicBMpdpxKduSZu5OANqUq8er4GM95omAGIOPOh+Nx0spthYA2BqGz+l
6HRkPJ7S236FZz73In/KVuLnwI8JJ2CbuJap8kvheCCZpmAWpb/cPx/3Vr/J6I17
XcW+ML9FoCI6AOvOzwIDAQAB
-----END PUBLIC KEY-----`;