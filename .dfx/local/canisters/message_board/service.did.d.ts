import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';

export interface Message {
  'id' : string,
  'attachmentURL' : string,
  'title' : string,
  'body' : string,
  'createdAt' : bigint,
  'updatedAt' : [] | [bigint],
}
export interface MessagePayload {
  'attachmentURL' : string,
  'title' : string,
  'body' : string,
}
export type _AzleResult = { 'Ok' : Message } |
  { 'Err' : string };
export type _AzleResult_1 = { 'Ok' : Array<Message> } |
  { 'Err' : string };
export interface _SERVICE {
  'addMessage' : ActorMethod<[MessagePayload], _AzleResult>,
  'deleteMessage' : ActorMethod<[string], _AzleResult>,
  'getMessage' : ActorMethod<[string], _AzleResult>,
  'getMessages' : ActorMethod<[], _AzleResult_1>,
  'updateMessage' : ActorMethod<[string, MessagePayload], _AzleResult>,
}
