/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

/**
 * Interface defining verification results.
 */
export default interface IVerificationResult {
  // The crypto algorithm suites used for cryptography
  /**
   * Verification result
   */
  result: boolean;

  /**
   * Reason of verification failure
   */
  reason: string;

  /**
   * statusCode for handler to return 
   */
  statusCode: number;

  /**
   * the JWT payload 
   */
  payload: any;

  /**
   * the JWT header alg value
   */
  alg: string;
}
