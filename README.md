# EMLWC

# LWC Methods for Enhanced Messaging in Lightning Experience:
https://developer.salesforce.com/docs/atlas.en-us.api_console.meta/api_console/sforce_api_console_methods_enhanced_lightning_conversationtoolkitapi_lwc.htm

The Conversation Toolkit API for Enhanced Messaging provides methods to interact with a Messaging customer from a Lightning web component (LWC). These methods apply to Lightning web components in Lightning Experience only.
The Conversation Toolkit API is designed for Enhanced Messaging channels, which includes Messaging for In-App and Web, Enhanced Apple, Enhanced Facebook Messenger, Enhanced WhatsApp, Enhanced SMS, and Partner Messaging.

These methods help developers customize the agent experience and how users and other components interact with the conversation component on a page. For example, if you want to customize how an agent composes a message, you can create a messaging composer to draft and send a message during the conversation. These methods only work with an open Messaging Session record page in the console or standard app. If the record is not open, the methods don’t work.

[endConversation() for LWC for Lightning Experience](https://developer.salesforce.com/docs/atlas.en-us.api_console.meta/api_console/sforce_api_console_lightning_endConversation_lwc.htm)
Ends the Messaging session. This method works only in Lightning console apps.

[getConversationLog() for LWC for Lightning Experience](https://developer.salesforce.com/docs/atlas.en-us.api_console.meta/api_console/sforce_api_console_lightning_getConversationLog_lwc.htm)
Retrieves the conversation log. This method works only in Lightning console apps.

[inactivateConversation() for LWC for Lightning Experience](https://developer.salesforce.com/docs/atlas.en-us.api_console.meta/api_console/sforce_api_console_lightning_inactivateConversation_lwc.htm)
Suspends the conversation. This method works only in Lightning console apps.

[sendTextMessage() for LWC for Lightning Experience](https://developer.salesforce.com/docs/atlas.en-us.api_console.meta/api_console/sforce_api_console_lightning_sendTextMessage_lwc.htm)
Sends a new text message from the agent to an end user. This method works only in Lightning console apps.

[setAgentInput() for LWC for Lightning Experience](https://developer.salesforce.com/docs/atlas.en-us.api_console.meta/api_console/sforce_api_console_lightning_setagentinput_lwc.htm)
Sets the text in the agent's text box. This method works only in Lightning console apps

[setMessagingComponent() for LWC for Lightning Experience](https://developer.salesforce.com/docs/atlas.en-us.api_console.meta/api_console/sforce_api_console_lightning_setMessagingComponent_lwc.htm)
Inserts a specified messaging component into the service rep’s text box. You can also use this method to insert text into the service rep’s text box. This method works only in Lightning console apps.

[sendMessagingComponent() for LWC for Lightning Experience](https://developer.salesforce.com/docs/atlas.en-us.api_console.meta/api_console/sforce_api_console_lightning_sendMessagingComponent_lwc.htm)
Sends a new message with a specified messaging component on behalf of the service rep. You can also use this method to send a text message. This method works only in Lightning console apps.

See Also

[Salesforce Trailhead: Build Lightning Web Components](https://trailhead.salesforce.com/content/learn/trails/build-lightning-web-components)

[Salesforce Help: Customize the Enhanced Conversation Component in the Agent Console](https://help.salesforce.com/s/articleView?language=en_US&id=sf.messaging_customize_enhanced_conversation_component.htm)

[Salesforce Help: Messaging Component Types and Formats](https://help.salesforce.com/s/articleView?language=en_US&id=sf.messaging_customize_enhanced_conversation_component.htm)
