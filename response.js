/***************************************************/
/**           INTERACTION CALLBACKS               **/
/***************************************************/
module.exports.callback = {
  /**
   * The `reply()` method is used to immediately respond and reply to an interaction.
   * 
   * Callback Type: `4`, -- `CHANNEL_MESSAGE_WITH_SOURCE`
   * 
   * @param {object} interaction 
   * @param {object} input 
   * @returns Promise
   * 
   * @url https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-response-object-interaction-callback-type
   */
  async reply(interaction, input = {}) {
    let cb_reply;
    try {
      let dflags = (input.ephemeral) ? 64 : 0;
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
            files: input.files ?? null,
            payload_json: input.payload_json ?? null,
            attachments: input.attachments,
          },
        }),
      });
    } catch (e) {
      console.log(e);
    }
    return cb_reply;
  },

  /**
   * The `defer()` method is used to acknowledge an interaction and wait for a followup. User sees a thinking/loading state.
   * 
   * Callback Type: `5`, -- `DEFERRED_CHANNEL_MESSAGE_WITH_SOURCE`
   * 
   * @param {object} interaction 
   * @param {object} input 
   * defer method only accepts an ephemeral boolean.
   * 
   * example:
   * ```js 
   * callback.defer(interaction,{ ephemeral: true }); 
   * ```
   * @returns Promise
   * 
   * @url https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-response-object-interaction-callback-type
   */
  async defer(interaction, input = {}) {
    let cb_defer;
    try {
      let dflags = (input.ephemeral) ? 64 : 0;
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
  },

  /**
   * The `component_defer()` method is used to acknowledge a component interaction and wait for a followup. User does NOT see a thinking/loading state.
   * 
   * Callback Type: `6`, -- `DEFERRED_UPDATE_MESSAGE` *for components
   * 
   * @param {object} interaction 
   * @param {object} input only accepts a boolean ephemeral.
   * 
   * example:
   * ```js 
   * callback.component_defer(interaction,{ ephemeral: true }); 
   * ```
   * @returns Promise
   * 
   * @url https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-response-object-interaction-callback-type
   */
  async component_defer(interaction, input = {}) {
    let cb_comp_defer;
    try {
      let dflags = (input.ephemeral) ? 64 : 0;
      cb_comp_defer = await post({
        url: encodeURI(`discord.com`),
        path: encodeURI(`/api/interactions/${interaction.id}/${interaction.token}/callback`),
        statusCode: 200,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: 6,
          data: { flags: dflags },
        }),
      });
    } catch (e) {
      console.log(e);
    }
    return cb_comp_defer;
  },

  /**
   * The `component_update()` method allows editing of the components parent message.
   * 
   * Callback Type: `7`, -- `UPDATE_MESSAGE` *for components
   * 
   * @param {object} interaction 
   * @param {object} input 
   * @returns Promise
   * 
   * @url https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-response-object-interaction-callback-type
   */
  async component_update(interaction, input = {}) {
    let cb_comp_update;
    try {
      let dflags = (input.ephemeral) ? 64 : 0;
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
            files: input.files ?? null,
            payload_json: input.payload_json ?? null,
            attachments: input.attachments,
          },
        }),
      });
    } catch (e) {
      console.log(e);
    }
    return cb_comp_update;
  },

  /**
   * The `autocomplete_reply()` method responds to an autocomplete interaction with suggested choices
   * 
   * Callback Type: `8`, -- `APPLICATION_COMMAND_AUTOCOMPLETE_RESULT`
   * 
   * @param {object} interaction 
   * @param {object} input 
   * @returns Promise
   * 
   * @url https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-response-object-interaction-callback-type
   */
  async autocomplete_reply(interaction, input = {}) {
    let cb_auto_reply;
    try {
      let dflags = (input.ephemeral) ? 64 : 0;
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
  },

  /**
   * The `modal_reply()` method responds to an interaction with a popup modal
   * 
   * Callback Type: `9`, -- `MODAL`
   * 
   * @param {object} interaction 
   * @param {object} input 
   * @returns Promise
   * 
   * @url https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-response-object-interaction-callback-type
   */
  async modal_reply(interaction, input = {}) {
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
  },

  /**
   * The `get_original()` method is used to return the initial Interaction response.
   * 
   * @param {object} interaction 
   * @returns Promise
   * 
   * @url https://discord.com/developers/docs/interactions/receiving-and-responding#get-original-interaction-response
   */
  async get_original(interaction) {
    let get_origin;
    try {
      get_origin = await get({
        url: encodeURI(`discord.com`),
        path: encodeURI(`/api/webhooks/${interaction.application_id}/${interaction.token}/messages/@original`),
        statusCode: 200,
        headers: {
          'Content-Type': 'application/json',
        },
        body: '',
      });
    } catch (e) {
      console.log(e);
    }
    return JSON.parse(get_origin.body.toString());
  },

  /**
   * The `edit_original()` method is used to edit the initial Interaction response.
   * 
   * @param {object} interaction 
   * @param {object} input
   * @returns Promise
   * 
   * @url https://discord.com/developers/docs/interactions/receiving-and-responding#edit-original-interaction-response
   */
  async edit_original(interaction, input = {}) {
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
          files: input.files ?? null,
          payload_json: input.payload_json ?? null,
          attachments: input.attachments,
        }),
      });
    } catch (e) {
      console.log(e);
    }
    return JSON.parse(edit_origin.body.toString());
  },

  /**
   * The `delete_original()` method is used to delete the initial Interaction response.
   * 
   * @param {object} interaction 
   * @returns Promise
   * 
   * @url https://discord.com/developers/docs/interactions/receiving-and-responding#delete-original-interaction-response
   */
  async delete_original(interaction) {
    let delete_origin;
    try {
      delete_origin = await del({
        url: encodeURI(`discord.com`),
        path: encodeURI(`/api/webhooks/${interaction.application_id}/${interaction.token}/messages/@original`),
        statusCode: 200,
        headers: {
          'Content-Type': 'application/json',
        },
        body: '',
      });
    } catch (e) {
      console.log(e);
    }
    return delete_origin;
  },
};

/***************************************************/
/**           INTERACTION FOLLOWUPS               **/
/***************************************************/
module.exports.followup = {
  /**
   * The `create()` method is used to edit an initially deferred interaction, following up with a new response.
   * @param {object} interaction 
   * @param {object} input 
   * @url https://discord.com/developers/docs/interactions/receiving-and-responding#create-followup-message
   */
  async create(interaction, input = {}) {
    let f_create;
    try {
      let dflags = (input.ephemeral) ? 64 : 0;
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
          files: input.files ?? null,
          payload_json: input.payload_json ?? null,
          attachments: input.attachments,
          flags: dflags,
        }),
      });
    } catch (e) {
      console.log(e);
    }
    return f_create;
  },

  /**
   * The `edit()` method is used to edit a followup message for an Interaction.
   * @param {object} interaction 
   * @param {object} input 
   * @url https://discord.com/developers/docs/interactions/receiving-and-responding#edit-followup-message
   */
  async edit(interaction, input = {}) {
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
          files: input.files ?? null,
          payload_json: input.payload_json ?? null,
          attachments: input.attachments,
        }),
      });
    } catch (e) {
      console.log(e);
    }
    return f_edit;
  },

  /**
   * The `get()` method is used to retrieve a followup message for an Interaction.
   * @param {object} interaction 
   * @param {object} input 
   * @url https://discord.com/developers/docs/interactions/receiving-and-responding#get-followup-message
   */
  async get(interaction, input = {}) {
    let f_get;
    try {
      f_get = await get({
        url: encodeURI(`discord.com`),
        path: encodeURI(`/api/webhooks/${interaction.application_id}/${interaction.token}/messages/${input.message_id}`),
        statusCode: 200,
        headers: {
          'Content-Type': 'application/json',
        },
        body: '',
      });
    } catch (e) {
      console.log(e);
    }
    return f_get;
  },

  /**
   * The `del()` method is used to delete the followup message for an Interaction.
   * @param {object} interaction 
   * @param {object} input 
   * @url https://discord.com/developers/docs/interactions/receiving-and-responding#delete-followup-message
   */
  async del(interaction, input = {}) {
    let f_delete_followup;
    try {
      f_delete_followup = await del({
        url: encodeURI(`discord.com`),
        path: encodeURI(`/api/webhooks/${interaction.application_id}/${interaction.token}/messages/${input.message_id}`),
        statusCode: 200,
        headers: {
          'Content-Type': 'application/json',
        },
        body: '',
      });
    } catch (e) {
      console.log(e);
    }
    return f_delete_followup;
  },
};


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
