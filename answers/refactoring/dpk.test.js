const {
  generateHex,
  getCandidate,
  deterministicPartitionKey,
} = require("./dpk");

describe("generateHex", () => {
  it("should return hex for any string input", () => {
    const hex = generateHex("Hello World");
    expect(hex).toBe(
      "3d58a719c6866b0214f96b0a67b37e51a91e233ce0be126a08f35fdf4c043c6126f40139bfbc338d44eb2a03de9f7bb8eff0ac260b3629811e389a5fbee8a894"
    );
  });

  it("should return false for any number input", () => {
    const hex = generateHex(1234);
    expect(hex).toBeFalsy();
  });

  it("should return false for undefined", () => {
    const hex = generateHex(undefined);
    expect(hex).toBeFalsy();
  });
});

describe("getCandidate", () => {
  it("should return the partitionKey if the event has partitionKey", () => {
    const candidate = getCandidate({
      partitionKey: "123",
    });
    expect(candidate).toBe("123");
  });

  it("should return the hex if any other key is given", () => {
    const candidate = getCandidate({
      someKey: "123",
    });
    expect(candidate).toBe(
      "59681dbbdc33b93e25d8ef82ab0c775e339adaf995d2ce74cdfa838373055047b17cfc1e3670ff367a7d4732f9db757555e3f5c8d5d48a1d0ac0c5e692c03860"
    );
  });

  it("should return the false if any no input is given", () => {
    const candidate = getCandidate();
    expect(candidate).toBeFalsy();
  });
});

describe("deterministicPartitionKey", () => {
  it("should return the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  it("should return the '0' if any partitionKey is given", () => {
    const trivialKey = deterministicPartitionKey({
      partitionKey: "123",
    });
    expect(trivialKey).toBe("0");
  });

  it("should return the key any partitionKey is given as object", () => {
    const trivialKey = deterministicPartitionKey({
      partitionKey: {
        randomKey: "123",
      },
    });
    expect(trivialKey).toBe('{"randomKey":"123"}');
  });

  it("should return the hex if the partition key exceeds MAX_PARTITION_KEY_LENGTH", () => {
    const trivialKey = deterministicPartitionKey({
      partitionKey: {
        randomKey:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec gravida purus, nec pretium elit. Duis pellentesque laoreet tempus. Praesent egestas cursus egestas. Morbi at tristique nibh. Etiam nec risus vitae nunc porttitor vulputate. Sed quis nisi massa. Proin faucibus in mi eget scelerisque. Etiam facilisis neque ex, ac consequat quam maximus eleifend. In fermentum libero non ornare suscipit. Vivamus in ipsum hendrerit, eleifend nunc viverra, volutpat felis. Sed dui risus, commodo in rutrum quis, auctor at diam.",
      },
    });
    expect(trivialKey).toBe('e342e9fbed23e08d481e4d1762418afe5e1e354ff581383e7903707df82cf190a4cc570c5b26bab1344c85d7ec647bd6566bfdbf909fba205487d72fcb224997');
  });
});
