import { APIGatewayProxyResult } from "aws-lambda";

export const hello = async (): Promise<APIGatewayProxyResult> => {
  console.log("hello world");

  return {
    statusCode: 200,
    body: JSON.stringify({ message: "hello world" }),
  };
};
