import React, { Component } from 'react'

 class NLDT_classcomp extends Component {
    constructor(props){
        super(props);
        // tao doi tuong du lieu
        this.state={
            fistName:"nguyen le",
            lastName:"duc thanh",
            userName:"k22cnt3",
        }
    }
    member = (props)=>{
        return(
            <div classname='alter alert-success'>
                <h3>xin chao:{props.fullName} - bạn đã {this.props.age} tuổi.</h3>
            </div>
        )
    }

    listmember = ()=>{
        return(
            <>
            <this.member fullName="nguyễn văn a" age="21"/>
            <this.member fullName="nguyễn văn b" age="22"/>
            <this.member fullName="nguyễn văn c" age="23"/>
            <this.member fullName="nguyễn văn d" age="24"/>
            </>
        )
    }
      render() {
    return (
      <div className='alter alert-danger'>
        <h2>class compoment demo</h2>
        <hr/>
        <h3>dữ liêụ trong state</h3>
        <h4>xin chào :{this.state.fistName} {this.state.lastName}</h4>
        <hr/>
        <h3>dữ liệu từ props</h3>
        <p>company:{this.props.company}</p>
        <p>cousr:{this.props.couse}</p>

        <hr/>
       <this.member fullName="nguyên lê đức thành" age="20"/>
       <hr/>
       {/*this.listmember*/}
       <this.listmember/>
      </div>
    )
  }
}
export default  NLDT_classcomp;
