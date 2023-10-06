import React,{useState} from 'react';

const Form = () => {
    const [data, setData] = useState({
        fullName:"",
        phoneNumber:"",
        email:""
    })

    const [submit, setSubmit] = useState(null)


    function handleChange (e){
        const {name, value} = e.target
        setData({...data, [name]: value})
    }
    function handleSubmit (e){
        e.preventDefault()
        setSubmit(data)
    }
    return (
        <div className="App">
            <h1>Форма регситрациии</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="">ФИО:</label>
                    <input type="text"
                           name="fullName"
                           value={data.fullName}
                           onChange={handleChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="">телефон:</label>
                    <input type="number"
                           name="phoneNumber"
                           value={data.phoneNumber}
                           onChange={handleChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="">адрес почты:</label>
                    <input type="text"
                           name="email"
                           value={data.email}
                           onChange={handleChange}/>
                </div>
                <button type="submit">submit</button>
            </form>
            {submit && (
                <div className="data-preview">
                    <h2>просмотр данных</h2>
                    <p>ФИО: {submit.fullName}</p>
                    <p>телефон:{submit.phoneNumber}</p>
                    <p>email:{submit.email}</p>
                </div>
            )}
        </div>
    );
};

export default Form;