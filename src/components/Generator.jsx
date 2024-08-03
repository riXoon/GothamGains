import { useState } from 'react';
import React from 'react';
import SectionWrapper from './SectionWrapper';
import { SCHEMES, WORKOUTS } from '../utils/swoldier';
import Button from './Button';

function Header(props) {
  const { index, title, description, text } = props;

  return (
    <div className='flex flex-col gap-4 w-full max-w-xl mx-auto'>
      <div className='flex items-center justify-center gap-2'>
        <p className='text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-400'>{index}</p>
        <h4 className='text-xl sm:text-2xl md:text-3xl'>{title}</h4>
      </div>
      <p className='text-sm sm:text-base mx-auto'>{description}</p>
    </div>
  );
}

export default function Generator() {
  const [showModal, setShowModal] = useState(false);
  const [poison, setPoison] = useState('individual');
  const [muscles, setMuscles] = useState([]);
  const [goals, setGoals] = useState('strength_power');

  function toggleModal() {
    setShowModal(!showModal);
  }

  function updateMuscles(muscleGroup) {
    if (muscles.includes(muscleGroup)) {
      setMuscles(muscles.filter(val => val !== muscleGroup))
      return
    }

    if (muscles.length > 3) {
        return
    }

    if (poison !== 'individual') {
        setMuscles([muscleGroup])
        setShowModal(false)
        return
    }

    setMuscles([...muscles, muscleGroup])
    if (muscles.length === 2) {
        setShowModal(false)
    }
  }

  return (
    <SectionWrapper 
      header="Generate Your Workout" 
      title={["It's", "Huge", "o'clock"]}
    >
      <div className='w-full max-w-2xl mx-auto flex flex-col gap-14'>
        {/* 1st Header Start */}
        <Header index={'01'} title={'Pick your poison'} description={'Select the workout you wish to endure.'} />

        <div className='grid grid-cols-2 sm:grid-cols-4 gap-4 mx-auto'>
          {Object.keys(WORKOUTS).map((type, typeIndex) => (
            <button 
              onClick={() => {
                setMuscles([])
                setPoison(type)}}
              className={'bg-slate-950 border duration-200 hover:border-blue-600 px-4 py-3 rounded-lg ' + (type === poison ? 'border-blue-600' : 'border-blue-400')} 
              key={typeIndex}
            >
              <p className='capitalize'>{type.replaceAll('_', " ")}</p>
            </button>
          ))}
        </div>
        {/* END OF FIRST HEADER */}

        {/* START OF 2ND HEADER */}
        <Header index={'02'} title={'Lock on targets'} description={'Select your muscles judged for annihilation.'} />

        <div className='bg-slate-950 border border-blue-400 rounded-lg flex flex-col'>
          <button onClick={toggleModal} className='relative flex p-3 items-center justify-center'>
            <p className='capitalize'>{muscles.length == 0 ? "Select Muscle Groups": muscles.join(' ')}</p>
            <i className='fa-solid absolute right-3 top-1/2 -translate-y-1/2 fa-caret-down'></i>
          </button>
          {showModal && (
            <div className='flex flex-col px-3 pb-3'>
              {(poison === 'individual' ? WORKOUTS[poison] : Object.keys(WORKOUTS[poison])).map((muscleGroup, muscleGroupIndex) => {
                return (
                  <button onClick={() => updateMuscles(muscleGroup)} key={muscleGroupIndex} className={'hover:text-blue-400 duration-200 ' + (muscles.includes(muscleGroup) ? ' text-blue-400' : '')}>
                    <p className='capitalize'>{muscleGroup.replaceAll('_', ' ')}</p>
                  </button>
                );
              })}
            </div>
          )}
        </div>
        {/* END OF 2ND HEADER */}

        {/* START OF 3RD HEADER */}
        <Header index={'03'} title={'Become Juggernaut'} description={'Select your ultimate objective.'} />

        <div className='grid grid-cols-3 gap-4 mx-auto'>
          {Object.keys(SCHEMES).map((scheme, schemeIndex) => (
            <button 
              onClick={() => setGoals(scheme)}
              className={'bg-slate-950 border duration-200 hover:border-blue-600 px-4 py-3 rounded-lg ' + (scheme === goals ? 'border-blue-600' : 'border-blue-400')} 
              key={schemeIndex}
            >
              <p className='capitalize'>{scheme.replaceAll('_', " ")}</p>
            </button>
          ))}
        </div>
        {/* END OF 3RD HEADER */}

      <Button text={"Formulate"}></Button>
      </div>
    </SectionWrapper>
  );
}
