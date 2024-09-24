/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { webhooksCreate } from "../funcs/webhooksCreate.js";
import { webhooksDelete } from "../funcs/webhooksDelete.js";
import { webhooksGet } from "../funcs/webhooksGet.js";
import { webhooksList } from "../funcs/webhooksList.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import {
  CreateWebhookRequest,
  CreateWebhookResponseBody,
} from "../models/operations/createwebhook.js";
import { DeleteWebhookRequest } from "../models/operations/deletewebhook.js";
import {
  GetWebhookRequest,
  GetWebhookResponseBody,
} from "../models/operations/getwebhook.js";
import {
  GetWebhooksRequest,
  GetWebhooksResponseBody,
} from "../models/operations/getwebhooks.js";
import { unwrapAsync } from "../types/fp.js";

export class Webhooks extends ClientSDK {
  /**
   * Creates a webhook
   *
   * @remarks
   * Creates a webhook
   */
  async create(
    request: CreateWebhookRequest,
    options?: RequestOptions,
  ): Promise<CreateWebhookResponseBody> {
    return unwrapAsync(webhooksCreate(
      this,
      request,
      options,
    ));
  }

  /**
   * Get a list of webhooks
   *
   * @remarks
   * Get a list of webhooks
   */
  async list(
    request: GetWebhooksRequest,
    options?: RequestOptions,
  ): Promise<GetWebhooksResponseBody> {
    return unwrapAsync(webhooksList(
      this,
      request,
      options,
    ));
  }

  /**
   * Get a webhook
   *
   * @remarks
   * Get a webhook
   */
  async get(
    request: GetWebhookRequest,
    options?: RequestOptions,
  ): Promise<GetWebhookResponseBody> {
    return unwrapAsync(webhooksGet(
      this,
      request,
      options,
    ));
  }

  /**
   * Deletes a webhook
   *
   * @remarks
   * Deletes a webhook
   */
  async delete(
    request: DeleteWebhookRequest,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(webhooksDelete(
      this,
      request,
      options,
    ));
  }
}