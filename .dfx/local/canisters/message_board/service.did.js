export const idlFactory = ({ IDL }) => {
  const MessagePayload = IDL.Record({
    'attachmentURL' : IDL.Text,
    'title' : IDL.Text,
    'body' : IDL.Text,
  });
  const Message = IDL.Record({
    'id' : IDL.Text,
    'attachmentURL' : IDL.Text,
    'title' : IDL.Text,
    'body' : IDL.Text,
    'createdAt' : IDL.Nat64,
    'updatedAt' : IDL.Opt(IDL.Nat64),
  });
  const _AzleResult = IDL.Variant({ 'Ok' : Message, 'Err' : IDL.Text });
  const _AzleResult_1 = IDL.Variant({
    'Ok' : IDL.Vec(Message),
    'Err' : IDL.Text,
  });
  return IDL.Service({
    'addMessage' : IDL.Func([MessagePayload], [_AzleResult], []),
    'deleteMessage' : IDL.Func([IDL.Text], [_AzleResult], []),
    'getMessage' : IDL.Func([IDL.Text], [_AzleResult], ['query']),
    'getMessages' : IDL.Func([], [_AzleResult_1], ['query']),
    'updateMessage' : IDL.Func([IDL.Text, MessagePayload], [_AzleResult], []),
  });
};
export const init = ({ IDL }) => { return []; };
