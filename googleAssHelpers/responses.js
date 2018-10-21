


module.exports = {
  greetings: `
  <speak>
    <p>
      <prosody volume="+20db" pitch="+30%" rate="x-fast">
        Greetings Operation Spark Humans
      </prosody>
    </p>
    <p>
      <emphasis>
        ahem
      </emphasis>
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
      <prosody pitch="+15%" rate="fast" volume="+2db">
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
  knowledge: `
  <speak>
    <voice gender="male">
      <p>
        <prosody pitch="+3%" volume="+4db">
          <s>
            Hi
          </s>
          <s>
            I am just stepping in while she gets a glass of water
          </s>
          <s>
            So this here
          </s>
          <s>
            if Alex put the right section on the page <break time="1ms" />
          </s>
          <s>
            is where we are able to tell the developers what we think we heard when someone was trying to activate one of our intents
          </s>
          <s>
            due to stuff like wind <break time="1ms" />
            background noise <break time="1ms" />
            annoying toddlers
          </s>
        </prosody>
      </p>
    </voice>
    <voice gender="female">
      <s>
        what
      </s>
    </voice>
    <voice gender="male">
      <prosody pitch="+3%" volume="+4db">
        You know
        <break time="5ms" />
        Loud and in the background
      </prosody>
    </voice>
    <voice gender="female">
      <prosody range="high">
        okay you are done
        <break time="5ms" />
      </prosody>
    </voice>
    <voice gender="male">
      what
      <break time="5ms" />
    </voice>
    <voice gender="female">
      <prosody range="high">
        get the <say-as interpret-as="expletive">you thought i said a bad word </say-as> out
      </prosody>
      <audio src="http://tteacher.net/Sound/Bruitages/porte-claque-17.mp3">
        <desc>a door slam</desc>
        Door (sound didn't load)
      </audio>
    </voice>
  </speak>
  `,
};