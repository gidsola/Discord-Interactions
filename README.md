# Discord Interactions.
#### Discord Interactions with Native Webhook handling for a zero dependancy solution.  


### Callbacks:
**https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-response-object-interaction-callback-type**  

| name | type | description | example |
|---|---|---|---|
| callback.reply  | 4 | Immediately respond to an interaction. | await interaction.callback.reply(event, {ephemeral: false}, { @content: '' } );  |
| callback.defer  | 5 | Show thinking state, create followup after. | await interaction.callback.defer(event, {ephemeral: false});  |
| callback.component_defer  | 6 | Deferred message for components. | await interaction.callback.component_defer(event, {ephemeral: false});  |
| callback.component_update  | 7 | Components message update. | await interaction.callback.component_update(event, {ephemeral: false}, { @content: '' } ); |
| callback.autocomplete_reply  | 8 | Show autocomplete results |   |
| callback.modal_reply  | 9 | Reply to command with modal popup | await interaction.callback.modal_reply(event, { @content: '' } ); |
| callback.get_original  | @ | Get original interaction. | await interaction.callback.get_original(event); |
| callback.edit_original  | @ | Edit original interaction. | await interaction.callback.edit_original(event, { content: ``, } ); |
| callback.delete_original  | @ | Delete original interaction. | await interaction.callback.delete_original(event); |


### FollowUps:
**https://discord.com/developers/docs/interactions/receiving-and-responding#followup-messages**  

| name  | description  | example  |
|---|---|---|
| followup.create  | Create a followup message for an Interaction.  | await interaction.followup.create(event, {ephemeral: false}, { @content: '' } );  |
| followup.edit  | Edits a followup message for an Interaction.  | await interaction.followup.edit(event, {id: @message.id}, { @content: '' } );  |
| followup.get  | Returns a followup message for an Interaction.  | await interaction.followup.get(event, {id: @message.id} ); |
| followup.del  | Deletes a followup message for an Interaction.  | await interaction.followup.del(event, {id: @message.id} ); |

### Code Examples:

```js

const interaction = require('Discord-Interactions');

await interaction.callback.defer(event, {ephemeral: false});

  const stuff = thing todo here;

  if (stuff) {
    try {
      await interaction.followup.create(event, {ephemeral: false}, {
          content: stuff,
      });
    } catch (e) {
      console.log(e);
    }
  }
```


```js

const interaction = require('Discord-Interactions');

await interaction.callback.modal_reply(event, {
    custom_id: `suggestion`,
    title: `Suggestion Box`,
    components: [{
      type: 1,
      components: [{
        type: 4,
        custom_id: "suggestion",
        label: "Suggestion:",
        style: 2,
        min_length: 1,
        max_length: 300,
        placeholder: "I love Ghastli!",
        required: true
      }]
    }]
  });
```


```js

const interaction = require('Discord-Interactions');

await interaction.callback.reply(event, {ephemeral: true}, {
      content: '',
      embeds: [
        {
          type: `rich`,
          title: `title`,
          description: `description.`,
          color: 0x082020,
          thumbnail: {
            url: `https://`,
            height: 0,
            width: 0,
          },
          author: {
            name: `author`,
          },
          footer: {
            text: `footer text goes here, you can make it substantial.`,
            icon_url: `https://`,
          },
        },
      ],
      components: [
        {
          type: 1,
          components: [
            {
              style: 2,
              label: `label`,
              custom_id: `id`,
              disabled: false,
              type: 2,
            },
            {
              style: 2,
              label: `label`,
              custom_id: `id`,
              disabled: false,
              type: 2,
            },
            {
              style: 2,
              label: `label`,
              custom_id: `id`,
              disabled: false,
              type: 2,
            },
          ],
        },
      ],
    }
  );
```


```js

const interaction = require('Discord-Interactions');

await interaction.callback.component_defer(event, {ephemeral: true});

  if (!event.member.roles.includes(roleid)) {
    await interaction.followup.edit(event, {id: @message.id}, {
      content: ``,
      embeds: [
        {
          type: 'rich',
          title: `Error!`,
          description: `🔔 This is not one of your roles.`,
          color: 0x082020,
        },
      ],
      components: ,
    });
```

Created in:
[![Created in Autocode. (https://Autocode.com)](https://content.public.files.stdlib.com/shared/static/branding/autocode-logo.svg "Autocode")](https://Autocode.com) Autocode.
