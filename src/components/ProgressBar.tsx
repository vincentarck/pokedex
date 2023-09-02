import React from "react";

type Props = {
    bgColor:string
    completed:number
    desc:string
}
const ProgressBar = (props: Props) => {
    const { bgColor, completed, desc } = props;
  
    const containerStyles = {
      height: 20,
      width: '100%',
      backgroundColor: "#e0e0de",
      borderRadius: 50,
    }
  
    const fillerStyles = {
      height: '100%',
      width: `${completed}%`,
      backgroundColor: bgColor,
      borderRadius: 'inherit',
    //   textAlign: 
    }
  
    const labelStyles = {
      padding: 5,
      color: 'white',
      fontWeight: 'bold'
    }
  
    return (
      <div className="flex gap-6">
        <p className="w-[48px]">{desc}</p>
        <div style={containerStyles} >
        <div style={fillerStyles}>
          <span style={labelStyles}>{`${completed}%`}</span>
        </div>
      </div>
      </div>
    );
  };
  
  export default ProgressBar;