export interface ITokenGeneratorMetadata {
  exp: number | string;
}

export interface ITokenGenerator {
  generate(data: any, metadata: ITokenGeneratorMetadata): string;
}
