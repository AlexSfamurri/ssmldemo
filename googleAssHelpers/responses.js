


module.exports = {
  greetings: `
  <speak>
    <p>
      <prosody volume="+20db" pitch="+30%" rate="x-fast">
        Greetings Operation Spark Humans
      </prosody>
    </p>
    <p>
      ahem
      <break time="5ms" />
      <prosody volume="+1db" pitch="+10%" range="high">
        <s>
          Greetings Operation Spark Humans
        </s>
        <s>
          I am Google Assistant
        </s>
        <s>
          I will be narrating today's demonstration
        </s>
      </prosody>
    </p>
    <prosody pitch="+5%" volume="-3db" range="high">
      <s>
        Alex
      </s>
      <s>
        <prosody pitch="+10%">
          Are you ready to begin?
        </prosody>
      </s>
    </prosody>
  </speak>
  `,
  intro: `
  <speak>
    <prosody range="high">
      <p>
        <s>
          Let's begin with where my intents and learning is done
        </s>
        <s>
          <prosody rate="slow">
            This console is part of the Dialog Flow <say-as interpret-as="characters"> API </say-as>
            <break time="3ms" />
            Formerly known as <say-as interpret-as="characters"> api ai</say-as>
          </prosody>
        </s>
      </p>
      <p>
        <prosody pitch="+10%">
          <s>
            it is here that we build the intents and what utterances they respond to
          </s>
          <s>
            every time a user talks to me i can keep track of what was said and how i tried to respond
          </s>
          <s>
            In order for me to understand users
          </s>
          <s>
            Developers have to prime me with utterances <break time="5ms"/> or phrases <break time="5ms" />
            that they expect their users to say
          </s>
          <s>
            Unfortunately these developers are human
            <break time="10ms" />
            And would have a hard time figuring out every possibility that a user could say
          </s>
        </prosody>
      </p>
      <prosody pitch="+15%" rate="slow" volume="+2db">
        <s>
          That is where my learning and training comes in
        </s>
        <s>
          Let me know when you are displaying the training section Alex
        </s>
      </prosody>
    </prosody>
  </speak>
  `,
};