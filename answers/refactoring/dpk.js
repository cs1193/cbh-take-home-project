const crypto = require("crypto");

/**
 * This function takes string as returns a SHA3-512 hex digest
 * if no string is provided, it returns false
 * @param {string} data 
 * @returns string
 */
const generateHex = (data) => {
  if (typeof data !== "string") return false;
  return crypto.createHash("sha3-512").update(data).digest("hex");
};

/**
 * This function takes event object as input, if partitionKey is there it returns partitionKey or generate a hex based on strigified event
 * if the event is undefined, it should return false
 * @param {object} event 
 * @returns string | object
 */
const getCandidate = (event) => {
  return event && event.partitionKey
    ? event.partitionKey
    : generateHex(JSON.stringify(event));
};

/**
 * This function returns a partition key based on event object, if candidate length > max partition key length it return generated candidated hex or the candidate itself
 * @param {Object} event 
 * @returns 
 */
const deterministicPartitionKey = (event) => {
  const TRIVIAL_PARTITION_KEY = "0";
  const MAX_PARTITION_KEY_LENGTH = 256;
  let candidate = getCandidate(event);
  candidate = candidate && typeof candidate !== 'string' ? JSON.stringify(candidate) : TRIVIAL_PARTITION_KEY;
  return candidate.length > MAX_PARTITION_KEY_LENGTH ? generateHex(candidate) : candidate;
};

module.exports = {
  generateHex,
  getCandidate,
  deterministicPartitionKey,
};
