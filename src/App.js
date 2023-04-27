import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

class App extends Component {
    state = {
        second: 0,
        minute: 0,
        hour: 0,
        interval: [],
        stopInterval: '',

    }
    startTime = () => {
        let interval = setInterval(() => {
            const {second, minute, hour} = this.state
            if (second === 59) {
                if (minute === 59) {
                    if (hour === 23) {
                        this.setState({
                            minute: 0,
                            second: 0,
                            hour: 0,
                        })

                    } else {
                        this.setState({
                            minute: 0,
                            second: 0,
                            hour: hour + 1
                        })
                    }
                } else {
                    this.setState({
                        second: 0,
                        minute: minute + 1,
                    })
                }

            } else {
                this.setState({
                    second: second + 1
                })
            }

        }, 100)
        this.setState({
            stopInterval: interval
        })
    }
    saveInterval = () =>{
        const {second , minute, hour , interval}= this.state
        interval.push({hour , minute , second})
        this.setState({
            interval
        })
    }



    stoptime = () => {
        clearInterval(this.state.stopInterval)
        this.setState({
            stopInterval:''
        })
    }
    ClearTIme = () =>{
        this.setState({
            minute:0,
            second:0,
            hour:0,
            interval:[]

        })
        this.stoptime()
    }


    render() {
        const {second, minute, hour , stopInterval , interval} = this.state
        return (
            <div className={'row'}>
                <div className="col-md-6 my-5 offset-3">
                    <div className="card text-center">
                        <div className="card-header">
                            <h1>StopWatch</h1>
                            <h2> Salom </h2>
                        </div>
                        <div className="card-body">
                            <h2>{hour}:{minute}:{second}</h2>
                        </div>
                        <div className="card-footer">
                            <button disabled={stopInterval && true} onClick={this.startTime}
                                    className={'btn btn-success'}>Start
                            </button>
                            <button onClick={this.stoptime} className={'btn btn-danger mx-2'}>Stop</button>
                            <button disabled={stopInterval ? false : true} onClick={this.saveInterval} className={'btn btn-dark '}>Interval</button>
                            <button onClick={this.ClearTIme} className={'btn btn-warning mx-2'}>Clear</button>

                        </div>
                    </div>
                    <div className={'row'}>
                        <div className="col-md-12">
                            {
                                interval.map( item => <h2>{item.hour} : {item.minute} : {item.second}</h2>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;


// import React, { Component } from 'react';
//
// // class App extends Component {
// //   state ={
// //     name:'John',
// //     users:{
// //       name:'Alisher',
// //       lastName : 'Usmonov',
// //       age:23,
// //     }
// //   }
// //   setName = () =>{
// //     const {users} = this.state
// //     users.name = 'Sam'
// //     users.lastName = 'Edison'
// //     users.age = 120
// //
// //     this.setState({
// //         users:users,
// //     })
// //   }
// //
// //
// //   render() {
// //     const {name , lastName , age} = this.state.users
// //     return (
// //       <div>
// //         <h1> {this.state.name} </h1>
// //         <h1> {name} </h1>
// //         <h1> {lastName} </h1>
// //         <h1> {age} </h1>
// //         <button onClick={this.setName}>SetUser</button>
// //       </div>
// //     );
// //   }
// // }
//
// export default App;


// import Invoice1 from "./components/invoice1";
// import Invoice2 from "./components/invoice2"
// import Invoice3 from "./components/invoice3";
// import Invoice4 from "./components/invoice4";
//
// class App extends Component {
//     state = {
//         count: 0
//     }
//
//
//
//   render() {
//     return (
//         <div>
//             <div className={"row"}>
//                 <div className="col-md-6 offset-3">
//                     <button onClick={()=> this.setState({count: 1})} className={'btn btn-dark'}>Invoice1</button>
//                     <button onClick={()=> this.setState({count: 2})} className={'btn btn-dark'}>Invoice2</button>
//                     <button onClick={()=> this.setState({count: 3})} className={'btn btn-dark'}>Invoice3</button>
//                     <button onClick={()=> this.setState({count: 4})} className={'btn btn-dark'}>Invoice4</button>
//                 </div>
//             </div>
//             <hr/>
//             <div className={'row'}>
//                 <div className={'col-md-12'}>
//                     {this.state.count === 1 && <Invoice1/>}
//                     {this.state.count === 2 && <Invoice2/>}
//                     {this.state.count === 3 && <Invoice3/>}
//                     {this.state.count === 4 && <Invoice4/>}
//                 </div>
//             </div>
//         </div>
//     );
//   }
// }
//
// export default App;
