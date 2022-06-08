/***************************************************/
/**           INTERACTION CALLBACKS               **/
/***************************************************/
module.exports.callback = {
  //CHANNEL_MESSAGE_WITH_SOURCE	=== (4) //respond to an interaction with a message
  reply: async (interaction, input = {}) => {
    let cb_reply;
    try {
      if (input.ephemeral === true) {
        dflags = 64;
      } else {
        dflags = 0;
      }
      cb_reply = await post({
        url: encodeURI(`discord.com`),
        path: encodeURI(`/api/interactions/${interaction.id}/${interaction.token}/callback`),
        statusCode: 200,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: 4,
          data: {
            tts: input.tts,
            content: input.content,
            embeds: input.embeds ?? input.embed,
            allowed_mentions: input.allowed_mentions,
            flags: dflags,
            components: input.components,
            attachments: input.attachments,
          },
        }),
      });
    } catch (e) {
      console.log(e);
    }
    return cb_reply;
  }, // EO reply

  //DEFERRED_CHANNEL_MESSAGE_WITH_SOURCE === (5) //ACK an interaction and edit a response later, the user sees a loading state
  defer: async (interaction, input = {}) => {
    let cb_defer;
    try {
      if (input.ephemeral === true) {
        dflags = 64;
      } else {
        dflags = 0;
      }
      cb_defer = await post({
        url: encodeURI(`discord.com`),
        path: encodeURI(`/api/interactions/${interaction.id}/${interaction.token}/callback`),
        statusCode: 200,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: 5,
          data: {
            flags: dflags
          },
        }),
      });
    } catch (e) {
      console.log(e);
    }
    return cb_defer;
  }, // EO defer

  //DEFERRED_UPDATE_MESSAGE* === (6)	for components, //ACK an interaction and edit the original message later; the user does not see a loading state
  component_defer: async (interaction, input = {}) => {
    let cb_comp_defer;
    try {
      if (input.ephemeral === true) {
        dflags = 64;
      } else {
        dflags = 0;
      }
      cb_comp_defer = await post({
        url: encodeURI(`discord.com`),
        path: encodeURI(`/api/interactions/${interaction.id}/${interaction.token}/callback`),
        statusCode: 200,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: 6,
          data: {flags: dflags},
        }),
      });
    } catch (e) {
      console.log(e);
    }
    return cb_comp_defer;
  }, // EO component_defer

  //UPDATE_MESSAGE*	=== (7)	for components, //edit the message the component was attached to
  component_update: async (interaction, input = {}) => {
    let cb_comp_update;
    try {
      if (input.ephemeral === true) {
        dflags = 64;
      } else {
        dflags = 0;
      }
      cb_comp_update = await post({
        url: encodeURI(`discord.com`),
        path: encodeURI(`/api/interactions/${interaction.id}/${interaction.token}/callback`),
        statusCode: 200,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: 7,
          data: {
            tts: input.tts,
            content: input.content,
            embeds: input.embeds ?? input.embed,
            allowed_mentions: input.allowed_mentions,
            flags: dflags,
            components: input.components,
            attachments: input.attachments,
          },
        }),
      });
    } catch (e) {
      console.log(e);
    }
    return cb_comp_update;
  }, // EO component_update

  //APPLICATION_COMMAND_AUTOCOMPLETE_RESULT === (8) //respond to an autocomplete interaction with suggested choices
  autocomplete_reply: async (interaction, input = {}) => {
    let cb_auto_reply;
    try {
      if (input.ephemeral === true) {
        dflags = 64;
      } else {
        dflags = 0;
      }
      cb_auto_reply = await post({
        url: encodeURI(`discord.com`),
        path: encodeURI(`/api/interactions/${interaction.id}/${interaction.token}/callback`),
        statusCode: 200,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: 8,
          data: {
            choices: input,
          },
        }),
      });
    } catch (e) {
      console.log(e);
    }
    return cb_auto_reply;
  }, // EO autocomplete_reply

  //MODAL**	=== (9)	respond to an interaction with a popup modal
  modal_reply: async (interaction, input = {}) => {
    let cb_modal_reply;
    try {
      cb_modal_reply = await post({
        url: encodeURI(`discord.com`),
        path: encodeURI(`/api/interactions/${interaction.id}/${interaction.token}/callback`),
        statusCode: 200,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: 9,
          data: {
            custom_id: input.custom_id,
            title: input.title,
            components: input.components,
          },
        }),
      });
    } catch (e) {
      console.log(e);
    }
    return cb_modal_reply;
  }, //EO modal_reply

  //Get Original Interaction Response
  get_original: async (interaction) => {
    let get_origin;
    try {
      get_origin = await get({
        url: encodeURI(`discord.com`),
        path: encodeURI(`/api/webhooks/${interaction.application_id}/${interaction.token}/messages/@original`),
        statusCode: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    } catch (e) {
      console.log(e);
    }
    return JSON.parse(get_origin.body.toString());
  }, //Get Original Interaction Response

  //Edit Original Interaction Response
  edit_original: async (interaction, input = {}) => {
    let edit_origin;
    try {
      edit_origin = await patch({
        url: encodeURI(`discord.com`),
        path: encodeURI(`/api/webhooks/${interaction.application_id}/${interaction.token}/messages/@original`),
        statusCode: 200,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          tts: input.tts,
          content: input.content,
          embeds: input.embeds ?? input.embed,
          allowed_mentions: input.allowed_mentions,
          components: input.components,
          attachments: input.attachments,
        }),
      });
    } catch (e) {
      console.log(e);
    }
    return JSON.parse(edit_origin.body.toString());
  }, //Edit Original Interaction Response

  //Delete Original Interaction Response
  delete_original: async (interaction) => {
    let delete_origin;
    try {
      delete_origin = await del({
        url: encodeURI(`discord.com`),
        path: encodeURI(`/api/webhooks/${interaction.application_id}/${interaction.token}/messages/@original`),
        statusCode: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    } catch (e) {
      console.log(e);
    }
    return delete_origin;
  }, //Delete Original Interaction Response
}; //EO MODULE CALLBACK

/***************************************************/
/**           INTERACTION FOLLOWUPS               **/
/***************************************************/
module.exports.followup = {
  //FOLLOWUP_CREATE
  create: async (interaction, input = {}) => {
    let f_create;
    try {
      if (input.ephemeral === true) {
        dflags = 64;
      } else {
        dflags = 0;
      }
      f_create = await post({
        url: encodeURI(`discord.com`),
        path: encodeURI(`/api/webhooks/${interaction.application_id}/${interaction.token}`),
        statusCode: 200,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          content: input.content,
          //username: interaction.member.user.username,
          username: input.username,
          //avatar_url,
          tts: input.tts,
          embeds: input.embed ?? input.embeds,
          allowed_mentions: input.allowed_mentions,
          components: input.components,
          //files[],
          //payload_json,
          attachments: input.attachments,
          flags: dflags,
        }),
      });
    } catch (e) {
      console.log(e);
    }
    return f_create;
  }, // EO INTERACTION FOLLOWUP

  //FOLLOWUP_EDIT
  edit: async (interaction, input = {}) => {
    let f_edit;
    try {
      f_edit = await patch({
        url: encodeURI(`discord.com`),
        path: encodeURI(`/api/webhooks/${interaction.application_id}/${interaction.token}/messages/${input.message_id}`),
        statusCode: 200,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          content: input.content,
          embeds: input.embeds ?? input.embed,
          allowed_mentions: input.allowed_mentions,
          components: input.components,
          //files[],
          //payload_json,
          attachments: input.attachments,
        }),
      });
    } catch (e) {
      console.log(e);
    }
    return f_edit;
  }, //EO INTERACTION FOLLOWUP EDIT

  //FOLLOWUP_GET
  get: async (interaction, input = {}) => {
    let f_get;
    try {
      f_get = await get({
        url: encodeURI(`discord.com`),
        path: encodeURI(`/api/webhooks/${interaction.application_id}/${interaction.token}/messages/${input.message_id}`),
        statusCode: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    } catch (e) {
      console.log(e);
    }
    return f_get;
  }, //EO INTERACTION FOLLOWUP GET

  //FOLLOWUP_DELETE
  del: async (interaction, input = {}) => {
    let f_delete_followup;
    try {
      f_delete_followup = await del({
        url: encodeURI(`discord.com`),
        path: encodeURI(`/api/webhooks/${interaction.application_id}/${interaction.token}/messages/${input.message_id}`),
        statusCode: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    } catch (e) {
      console.log(e);
    }
    return f_delete_followup;
  }, //EO INTERACTION FOLLOWUP DELETE
}; //EO MODULE FOLLOWUP

//method GET
  async function get(params) {
    return new Promise(async function (resolve, reject) {
      const https = require('node:https');
      const options = {
        host: params.url,
        port: 443,
        path: params.path,
        method: 'GET',
        headers: params.headers,
      };
      options.agent = new https.Agent(options);

      let req = await https.request(options, async (res) => {
        let data = '';
        res.on('data', async (readable) => {
          data += readable;
        });
        res.on('end', async () => {
          result = {};
          result.statusCode = res.statusCode;
          result.headers = res.headers;
          result.body = data;
          resolve(result);
        });
      });
      req.on('error', (e) => {
        console.error(e);
      });
      req.end();
    });
  };
  //method POST
  async function post(params) {
    return new Promise(async function (resolve, reject) {
      const https = require('node:https');
      const options = {
        host: params.url,
        port: 443,
        path: params.path,
        method: 'POST',
        headers: {
          'Content-Type':
            params.headers['Content-Type'] ??
            params.headers['content-type'] ??
            '',
          'Content-Length':
            params.headers['Content-Length'] ??
            params.headers['content-length'] ??
            Buffer.byteLength(params.body),
        },
      };
      options.agent = new https.Agent(options);

      let req = await https.request(options, async (res) => {
        let data = '';
        res.on('data', async (readable) => {
          data += readable;
        });
        res.on('end', async () => {
          result = {};
          result.statusCode = res.statusCode;
          result.headers = res.headers;
          result.body = data;
          resolve(result);
        });
      });
      req.on('error', (e) => {
        console.error(e);
      });
      req.write(params.body);
      req.end();
    });
  };
  //method PATCH
  async function patch(params) {
    return new Promise(async function (resolve, reject) {
      const https = require('node:https');
      const options = {
        host: params.url,
        port: 443,
        path: params.path,
        method: 'PATCH',
        headers: {
          'Content-Type':
            params.headers['Content-Type'] ??
            params.headers['content-type'] ??
            '',
          'Content-Length':
            params.headers['Content-Length'] ??
            params.headers['content-length'] ??
            Buffer.byteLength(params.body),
        },
      };
      options.agent = new https.Agent(options);

      let req = await https.request(options, async (res) => {
        let data = '';
        res.on('data', async (readable) => {
          data += readable;
        });
        res.on('end', async () => {
          result = {};
          result.statusCode = res.statusCode;
          result.headers = res.headers;
          result.body = data;
          resolve(result);
        });
      });
      req.on('error', (e) => {
        console.error(e);
      });
      req.write(params.body);
      req.end();
    });
  };
  //method DELETE
  async function del(params) {
    return new Promise(async function (resolve, reject) {
      const https = require('node:https');
      const options = {
        host: params.url,
        port: 443,
        path: params.path,
        method: 'DELETE',
        headers: {
          'Content-Type':
            params.headers['Content-Type'] ??
            params.headers['content-type'] ??
            '',
          'Content-Length':
            params.headers['Content-Length'] ??
            params.headers['content-length'] ??
            Buffer.byteLength(params.body),
        },
      };
      options.agent = new https.Agent(options);

      let req = await https.request(options, async (res) => {
        let data = '';
        res.on('data', async (readable) => {
          data += readable;
        });
        res.on('end', async () => {
          result = {};
          result.statusCode = res.statusCode;
          result.headers = res.headers;
          result.body = data;
          resolve(result);
        });
      });
      req.on('error', (e) => {
        console.error(e);
      });
      req.write(params.body);
      req.end();
    });
  };
