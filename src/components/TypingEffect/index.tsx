"use client"
import Typewriter from 'typewriter-effect';

const TypingEffect = ({ description }: any) => {

    return <div className='typeWriter-style'>
        <Typewriter
            options={{
                strings: [`${description}`],
                autoStart: true,
                loop: true,
            }}
        />
    </div>
}

export default TypingEffect;
