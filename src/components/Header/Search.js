// import { useRef } from "react"
// import { useHistory } from "react-router-dom";

// const SearchForm = () => {
//     let keyword = useRef();
//     let history = useHistory();

//     const handleSubmit =(event) => {
//         let word = keyword.current.value;
//         event.preventDefault()
//         if (word.lenght < 4) {
//             swal({
//                 text: '4 letters min lenght require',
//                 icon: 'error'
//             });
//         }else {
//             keyword.current.value = '';
//             history.push(`/result/buscar?name=${word}`);
//         }
//     }

//     return (
        
//         <div className="">
//             <form onSubmit={(e) => handleSubmit(e)}>
//             <input
//                 type="text"
//                 name="keywords"
//                 placeholder="Search"
//                 className="search-form_input"
//                 ref={keyword}
//             />
//             <button type="submit" className="">
//                 <i className="fas fa-search" />
//             </button>
//             </form>
//         </div>
//     );
// }
// export default SearchForm;