import React from 'react'

export default function Create() {
  return (
    <>
      <section className="Newpost">
        <div className="container BoxItem">
          <div className="img">
            <img src="https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />
          </div>
          <form >
            <div className="inputFile FlexCenter">
              <input type="file" name="" id="" />
            </div>
            <div className="text">
              <input type="text" placeholder='Title' />
              <textarea name="" placeholder='Discriptions' id="" cols={30} rows={10}></textarea>        
            </div>
            <button className='button'>Create post</button>
          </form>
        </div>
      </section>

    </>
  )
}
