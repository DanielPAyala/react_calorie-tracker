import { categories } from '../data/categories';

export default function Form() {
  return (
    <form className='space-y-5 bg-white shadow p-10 rounded-lg'>
      <div className='grid grid-cols-1 gap-3'>
        <label htmlFor='category' className='font-bold'>
          Categoría:
        </label>
        <select
          className='border border-slate-300 p-2 rounded-lg w-full bg-white'
          name='category'
          id='category'
        >
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>

      <div className='grid grid-cols-1 gap-3'>
        <label htmlFor='activity' className='font-bold'>
          Actividad:
        </label>
        <input
          type='text'
          id='activity'
          className='border border-slate-300 p-2 rounded-lg w-full bg-white'
          placeholder='Ej. Comida, Jugo de Naranja, Ensalada, ejercicio, Pesas, Bicicleta'
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
        />
      </div>

      <input
        type='submit'
        className='bg-gray-800 hover:bg-gray-900 cursor-pointer w-full p-2 text-white font-bold uppercase'
        value='Guardar Comida o Guardar Ejercicio'
      />
    </form>
  );
}
