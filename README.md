# Discord Interactions Zero
**Discord Interactions with Native Webhook handling for a zero dependancy solution.**  

Update 2.0.2 Brings a new format to use.  
```js  
await interaction.callback.defer(event, {ephemeral: true});  

await interaction.followup.create(event, {
  ephemeral: true,
  content: 'Your suggestion has been noted, Thank You',
});  
```
ONLY the defers remain unchanged.  
This format also agrees with the auto-formatter :)


### Callbacks:
**https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-response-object-interaction-callback-type**  

| name | type | description |
|---|---|---|
| callback.reply  | 4 | Immediately respond to an interaction. |
| callback.defer  | 5 | Show thinking state, create followup after. |
| callback.component_defer  | 6 | Deferred message for components. |
| callback.component_update  | 7 | Components message update. |
| callback.autocomplete_reply  | 8 | Show autocomplete results |
| callback.modal_reply  | 9 | Reply to command with modal popup |
| callback.get_original  | @ | Get original interaction. |
| callback.edit_original  | @ | Edit original interaction. |
| callback.delete_original  | @ | Delete original interaction. |


### FollowUps:
**https://discord.com/developers/docs/interactions/receiving-and-responding#followup-messages**  

| name  | description  |
|---|---|
| followup.create  | Create a followup message for an Interaction.  |
| followup.edit  | Edits a followup message for an Interaction.  |
| followup.get  | Returns a followup message for an Interaction.  |
| followup.del  | Deletes a followup message for an Interaction.  |

### Examples:

```js  
const interaction = require('discord-interactions-zero');  

await interaction.callback.defer(event, {ephemeral: false});

  let stuff = "Hello World";

  if (stuff) {
    try {
      await interaction.followup.create(event, {
        ephemeral: false,
        content: stuff,
      });
    } catch (e) {
      console.log(e);
    }
  }
```  


```js  
const interaction = require('discord-interactions-zero');  

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
const interaction = require('discord-interactions-zero');

await interaction.callback.reply(event, {
  ephemeral: true,
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
});
```


```js
const interaction = require('discord-interactions-zero');

await interaction.callback.component_defer(event, {ephemeral: true});

  if (!event.member.roles.includes(roleid)) {
    await interaction.followup.edit(event, {
      message_id: @message.id,
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

My hiding place on Discord:  
https://dsc.gg/house-of-ghastli


Proud supporter of 
[![Proud supporter of Autocode. (https://Autocode.com)](https://content.public.files.stdlib.com/shared/static/branding/autocode-logo.svg "Autocode")](https://Autocode.com) Autocode.
