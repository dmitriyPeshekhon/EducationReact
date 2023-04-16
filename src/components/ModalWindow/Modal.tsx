import React from "react"
import './Modal.css'
import { useAppDispatch } from "../../store/hooks"
import { showModal } from "../../store/modalSlice"


export function Modal () {

  const [value, setValue] = React.useState('')

  const dispatch = useAppDispatch()

  function formSubmitHandler (event: React.FormEvent) {
    event.preventDefault()
  }

  const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

    return(
      <div className={'overlay'}>
       <div className='modal'>
        <form onSubmit={formSubmitHandler}>
          <h2>sobaka</h2>
          <input 
            className = 'input' 
            type="text" 
            value={value} 
            placeholder="Введите название продукта..." 
            onChange={inputChangeHandler}
          />
          <button>Добавить товар</button>
          <button onClick={() => dispatch(showModal())}>Закрыть окно</button>
        </form>
       </div>
      </div>
    )
}