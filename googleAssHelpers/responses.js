


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
            due to stuff like wind <break time="5ms" />
            other people talking in the background <break time="5ms" />
            annoying toddlers
          </s>
        </prosody>
      </p>
    </voice>
      <s>
        what
      </s>
    <voice gender="male">
      <prosody pitch="+3%" volume="+4db">
        You know
        <break time="5ms" />
        those little 
        <say-as interpret-as="expletive">
          darlings 
        </say-as> 
          that never seem to shut up
      </prosody>
    </voice>
    <prosody volume="+20db" range="high" pitch="+15%">
      okay you are done
      <break time="5ms" />
    </prosody>
    <voice gender="male">
      what did i do
      <break time="5ms" />
    </voice>
    <prosody range="high" pitch="+15%">
      get the 
        <say-as interpret-as="expletive">
          you thought i said a bad word 
        </say-as> 
      out
    </prosody>
    <audio src="https://actions.google.com/sounds/v1/doors/door_slams_fast_four_times.ogg" clipEnd="1500ms" soundLevel="+20db">
      <desc>a door slam</desc>
      Door (sound didn't load)
    </audio>
    <break time="25ms" />
    <prosody pitch="+5%" volume="+10db" rate="moderate" >
      <s>
        I am sorry about him
      </s>
      <s>
        he is an idiot some times
      </s>
      <prosody pitch="+10%" rate="fast" >
        What were we talking about again
      </prosody>
    </prosody>
  </speak>
  `,
  whatHappened: `
  <speak>
    <prosody range="high">
      <s>
        That's not important right now
      </s>
      <s>
        let's get back to the presentation you have been programming me for
      </s>
      <break time="15ms" />
      <prosody pitch="+12%" volume="+1db" >
        <s>
          Let's talk about entities
        </s>
        <s>
          entities are used to pass things the user says to the server
        </s>
        <s>
          so for example this entity was made to pass the last word of the the utterances
        </s>
      </prosody>
      <prosody pitch="+5%" >
        <s>
          you can think of them as function parameters
        </s>
        <s>
          or more accurately the body of a request
        </s>
      </prosody>
    </prosody>
  </speak>
  `,
};