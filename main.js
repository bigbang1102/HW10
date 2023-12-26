const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App/>)

function Counter(){
    const [countNum,setCountNum] = React.useState(0)


//     const incCount = () => {
//         setCountNum(countNum+1)
//     }
//     const DeleteCount = ()=>{
//    if (countNum > 0){
//     setCountNum(countNum -1)
//    }
//     }
//     const resetCount = ()=>{
//         setCountNum(0)
//     }
const updateCounter = (n) => {
    if(countNum+n <0){
        return
    }
// setCountNum((prv)=>{
//     console.log(prv)
//     return prv+n
// })S

setCountNum(prv => prv +n)

}
return(
    <div className='counter'>
        <button class="btn" onClick ={()=>updateCounter(-1)}> - </button>
        <h3 class="vbn">{countNum}</h3>
        <button class="tnt"onClick = {()=>updateCounter(1)}> + </button>
        <button class="ngv"onClick={()=>updateCounter(-countNum)}> c </button>
    </div>
)
}

function SumInfo(props){
    console.log(props)
    const styles ={
        color : props.color,
        fontSize : props.size==='big' ? '50px' :'40px'
    }
return(
    <div className='suminfo'>
        {/* <h1 style={styles}>Sum = 0</h1> */}
        <h1 style={{color :props.color,fontSize:'50px'}}>Sum = 0</h1>
    </div>
)

}

function App(){
    return(
        <>
        <button className='text-center'>Add counter</button>
        <SumInfo color="green" size="big"/>
        <Counter/>
        </>
    )
}