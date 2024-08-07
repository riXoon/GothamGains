import React from 'react'
import SectionWrapper from './SectionWrapper'
import ExerciseCard from './ExerciseCard'
import Button from './Button'

export default function Workout(props) {
    const { workout } = props
    return (
        <SectionWrapper id={'workout'} header={"welcome to"} title={['The', 'BatCave', '']}>

            <div className='mx-auto max-w-[700px] w-fit text-slate-400 text-xs sm:text-sm text-justify px-4 flex flex-col gap-8'>
                <p className='sm:text-wrap'><b>*Note</b> - <span className='text-batman-yellow-100'>reps</span> is the number of repetitions, <span className='text-batman-yellow-100'>rest</span> is specified in seconds, and <span className='text-batman-yellow-100'>tempo</span> is the number of seconds for each movement phase in the order of eccentric - isometric - concentric (or down - pause - up).</p>
                <p>For <span className='text-batman-yellow-100'>weight selection</span>, choose a weight that allows you to complete the repetitions with minimal sacrifice to form.</p>
                <p>Happy lifting!</p>
            </div>
            <div className='flex flex-col gap-4'>
                {workout.map((exercise, i) => {
                    return (
                        <ExerciseCard i={i} exercise={exercise} key={i} />
                    )
                })}
            </div>
                <Button func={() => {
                    window.location.href = '#generate'
                }} text={"Start Over"}></Button>

        </SectionWrapper>
    )
}