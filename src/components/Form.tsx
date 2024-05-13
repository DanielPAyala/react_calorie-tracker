import { useState, ChangeEvent, FormEvent, Dispatch } from 'react';
import { categories } from '../data/categories';
import type { Activity } from '../types';
import { ActivityActions } from '../reducers/activity-reducer';

type FormProps = {
  dispatch: Dispatch<ActivityActions>;
};

const initialState = { category: 1, name: '', calories: 0 };

export default function Form({ dispatch }: FormProps) {
  const [activity, setActivity] = useState<Activity>(initialState);

  const handleChange = (
    e: ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement>
  ) => {
    const isNumberField = ['category', 'calories'].includes(e.target.id);

    setActivity({
      ...activity,
      [e.target.id]: isNumberField ? +e.target.value : e.target.value,
    });
  };

  const isValidActivity = (): boolean => {
    const { name, calories } = activity;
    return name.trim() !== '' && calories > 0;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({ type: 'save-activity', payload: { newActivity: activity } });
    setActivity(initialState);
  };

  return (
    <form
      className='space-y-5 bg-white shadow p-10 rounded-lg'
      onSubmit={handleSubmit}
    >
      <div className='grid grid-cols-1 gap-3'>
        <label htmlFor='category' className='font-bold'>
          Categoría:
        </label>
        <select
          className='border border-slate-300 p-2 rounded-lg w-full bg-white'
          name='category'
          id='category'
          value={activity.category}
          onChange={handleChange}
        >
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>

      <div className='grid grid-cols-1 gap-3'>
        <label htmlFor='name' className='font-bold'>
          Actividad:
        </label>
        <input
          type='text'
          id='name'
          className='border border-slate-300 p-2 rounded-lg w-full bg-white'
          placeholder='Ej. Comida, Jugo de Naranja, Ensalada, ejercicio, Pesas, Bicicleta'
          value={activity.name}
          onChange={handleChange}
        />
      </div>

      <div className='grid grid-cols-1 gap-3'>
        <label htmlFor='calories' className='font-bold'>
          Calorías:
        </label>
        <input
          type='number'
          id='calories'
          className='border border-slate-300 p-2 rounded-lg w-full bg-white'
          placeholder='Ej. Comida, Jugo de Naranja, Ensalada, ejercicio, Pesas, Bicicleta'
          value={activity.calories}
          onChange={handleChange}
        />
      </div>

      <input
        type='submit'
        className='bg-gray-800 disabled:opacity-10 hover:bg-gray-900 cursor-pointer w-full p-2 text-white font-bold uppercase'
        value={activity.category === 1 ? 'Guardar Comida' : 'Guardar Ejercicio'}
        disabled={!isValidActivity()}
      />
    </form>
  );
}
