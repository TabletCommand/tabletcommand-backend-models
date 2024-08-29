export const url = process.env.NODE_MONGO_URL || "";

export function checkIfTestDatabase() {
  if (!/massive-test/i.exec(url)) {
    console.log(`Not a test database: ${url}? Expecting database: massive-test.`);
    process.exit(1);
  }
}

checkIfTestDatabase();
