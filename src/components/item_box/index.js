import React from 'react'

const ItemBox = (props) => {
console.log('>>>PROPS', props);
    return (
    <div>
        <div className="col">
            <div className="card mb-4 rounded-3 shadow-sm border-primary">
              <div className="card-header py-3 text-white bg-primary border-primary">
                <h4 className="my-0 fw-normal">{props.name}</h4>
              </div>
              <div className="card-body">
                <img src={props.image} style={{width:"90%", alignItems:"center", margin:"10px 0px 20px 0px"}} />
                
                <a href={'#/category/' + props.slug} type="button" className="w-100 btn btn-lg btn-primary">
                  Open Category
                </a>
              </div>
            </div>
          </div>
    </div>
  )
}

export default ItemBox