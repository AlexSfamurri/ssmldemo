


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
        <s>
          this is handy
        </s>
        <s>
          because this allows me to do things like interact with the database
        </s>
        <s> 
          and provide data that can be used to create more dynamic and logical responses
        </s>
      </prosody>
      <prosody pitch="+10%">
        unfortunately due to time constraints
        <break time="5ms" />
        i will not be able to demonstrate too much of that in this presentation
      </prosody>
    </prosody>
  </speak>
  `,
  nutsBolts: `
  <prosody range="high" pitch="+12%" rate="moderate">
    <s>
      Sounds good to me
    </s>
    <s>
      I will give you a bit to switch to <say-as interpret-as="characters"> VS </say-as> Code
    </s>
    <break time="50ms" />
    <s>
      <prosody pitch="+3%">
        I hope you are ready
      </prosody>
    </s>
    <s>
      <prosody pitch="+6%">
        because we don't have time to waste
      </prosody>
    </s>
    <p>
      <s>
        So at the top on lines 1 through 7
      </s>
      <s>
        <prosody pitch="+10%">
          we are requiring all the files 
            <break time="5ms" />
          and the methods we need to make me 
            <break time="10ms" /> 
          well 
            <break time="10ms" />
          <emphasis>
            me
          </emphasis>
        </prosody>
      </s>
      <s>
        actions on google is the npm module that google released to help developers make awesome code for me
      </s>
      <s>
        with it
          <break time="4ms" />
        they can essentially bring my personality to life
      </s>
      <s>
        <prosody pitch="+15%">
          it also helps cut down on what would have been
            <break time="3ms" />
          <emphasis>
            a lot of boiler plate
          </emphasis>
        </prosody>
      </s>
      <s>
        this is also where the files alex made to give me access to responses and the database are as well
      </s>
    </p>
    <break time="15ms" />
    <p>
      <prosody pitch="+2%" >
        <s>
          after that you will notice the app dot intent methods
        </s>
        <s>
          these are the handlers that respond based on the intent that my machine learning thinks you wish to invoke
        </s>
        <s>
          <prosody pitch="+7%">
            you can tell which intent is being invoked based on the matching string being passed into the intent method
          </prosody>
        </s>
        <s>
          <prosody pitch="+4%">
            inside each you will notice the dot ask method
          </prosody>
        </s>
        <s>
          this method is what needs to be invoked to tell me what i should be saying
        </s>
        <s>
          <prosody pitch="+13%" >
            you may notice that they do not all take the same parameters
          </prosody>
        </s>
        <s>
          alex decided to do this to show some of the many different ways you can send me the responses you wish for me to say
        </s>
      </prosody>
    </p>
    <p>
      <prosody pitch="+11%">
        <s>
          you can also send back more than one ask
        </s>
        <s>
          but the moment you send back with the close method
          <break time="7ms" />
          i will believe that is all and close down
        </s>
      </prosody>
    </p>
    <break time="50ms" />
    <p>
      <prosody pitch="+9%" >
        <s>
          in this response dot js file on the screen we have my 
            <say-as interpret-as="characters">
              ssml
            </say-as> 
          scripts are being held and then exported to my helper file
        </s>
      </prosody>
      <prosody pitch="+6%" >
        <s>
          You will also be able to notice the parts where you heard the censor bleeps
        </s>
        <s>
          nothing bad was actually being censored on lines 142 and 126
        </s>
      </prosody>
      <prosody pitch="+16%">
        <s>
          it was all for dramatic effect
        </s>
        <s>
          and an excuse to demonstrate that feature as well
        </s>
      </prosody>
    </p>
    <p>
      <s>
        we both realize this is a lot of text to try and read
      </s>
      <s>
        so Alex will leave these up
        <break time="10ms" />
        and enhance more if needed
      </s>
      <s>
        so that if you have any questions about anything we may have left out
      </s>
      <s>
        Alex will be more than happy to answer
      </s>
    </p>
    <s>
      one other thing though real quick
    </s>
  </prosody>
  `,
};