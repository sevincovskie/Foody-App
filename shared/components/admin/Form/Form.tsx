import stayles from "./form.module.css"
import React from 'react'

function Form() {
  return (
    <>
        <div style={{ display: newData.display ? 'block' : 'none' }} className={${style.addContainer} ${newData ? style['sağdan-sola'] : ''}}>
            <div style={{ justifyContent: 'space-between', display: 'flex' }}>
                <h2>{newData.data}</h2>
                <Image alt='exit' className={style.exit} onClick={exitFunction} style={{ display: isSmallScreen ? 'flex' : 'none' }} src={exit} />
            </div>
            {(newData?.data === 'Create Product' || newData?.data === 'Edit Product') && (
                <div>
                    <div className={style.addImg} >
                        <div>
                            <h2>Upload your product image</h2>
                            <img className={style.additionalImg} style={{ display: addImg ? 'block' : 'none', marginTop: '10px' }} src={addImg} />
                        </div>
                        <div className={style.addDiv} onClick={handleImageClick}>
                            <input ref={fileInputRef}
                                style={{ display: 'none' }} type='file' onChange={handleImageChange}></input>
                            <Image className={style.uploadImg} src={upload} alt='upload' />
                        </div>
                    </div>
                    <div className={style.addInfoDiv}>
                        <h2>
                            Add your Product description and necessary information
                        </h2>
                        <div className={style.addInp}>
                            <div>
                                <label for='name'>Name</label>
                                <input ref={nameRef} id='name' placeholder='name' type='text' />
                            </div>
                            <div>
                                <label>Description</label>
                                <textarea ref={description} placeholder='description' />
                            </div>
                            <div>
                                <label for='price'>Price</label>
                                <input ref={price} id='price' type='number' placeholder='00.00' />
                            </div>
                            <div>
                                <label>Restuarants</label>
                                <select value={newData.data==='Edit Product'?resId:null} onClick={handleChangeRes}>
                                    {restuarants.map(restuarant=>(
                                        <option key={restuarant.id} value={restuarant.id}>{restuarant.name}</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                    </div>
                    <div className={style.addButtonDiv}>
                        <button className={style.cancelBtn} onClick={exitFunction}>Cancel</button>
                        <button className={style.addBtn} onClick={addProduct}>{newData.data}</button>
                    </div>
                </div>
            )}
            {(newData?.data === 'Add Restuarant' || newData?.data === 'Edit Restuarant') && (
                <div>
                    <div className={style.addImg} >
                        <div>
                            <h2>Upload image</h2>
                            <img className={style.additionalImg} style={{ display: addImg ? 'block' : 'none', marginTop: '10px' }} src={addImg || upload} />
                        </div>
                        <div className={style.addDiv} onClick={handleImageClick}>
                            <input ref={fileInputRef}
                                style={{ display: 'none' }} type='file' onChange={handleImageChange}></input>
                            <Image className={style.uploadImg} src={upload} alt='upload' />
                        </div>
                    </div>
                    <div className={style.addInfoDiv}>
                        <h2>
                            Add your Restuarant information
                        </h2>
                        <div className={style.addInp}>
                            <div>
                                <label for='name'>Name</label>
                                <input ref={nameRef} id='name' placeholder='name' type='text' />
                            </div>
                            <div>
                                <label>Cuisine</label>
                                <textarea ref={cuisine} placeholder='cuisine' />
                            </div>
                            <div>
                                <label for='price'>Delivery Price $</label>
                                <input ref={priceDelivery} id='price' type='number' placeholder='00' />
                            </div>
                            <div>
                                <label for='priceMin'>Delivery Min</label>
                                <input ref={priceMin} id='priceMin' type='number' placeholder='00' />
                            </div>
                            <div>
                                <label for='address'>Address</label>
                                <input ref={address} id='address' type='text' placeholder='Address' />
                            </div>
                            <div>
                                <label>Category</label>
                                <select onChange={handleChange}>
                                    {category.map(item => (
                                        <option key={item.id} value={item.id}>{item.name}</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                    </div>
                    <div className={style.addButtonDiv}>
                        <button className={style.cancelBtn} onClick={exitFunction}>Cancel</button>
                        <button className={style.addBtn} onClick={addProduct}>{newData.data}</button>
                    </div>
                </div>
            )}
            {(newData?.data === 'Add Category' || newData?.data === 'Edit Category') && (
                <div>
                    <div className={style.addImg} >
                        <div>
                            <h2>Upload image</h2>
                            <img className={style.additionalImg} style={{ display: addImg ? 'block' : 'none', marginTop: '10px' }} src={addImg || upload} />
                        </div>
                        <div className={style.addDiv} onClick={handleImageClick}>
                            <input ref={fileInputRef}
                                style={{ display: 'none' }} type='file' onChange={handleImageChange}></input>
                            <Image className={style.uploadImg} src={upload} alt='upload' />
                        </div>
                    </div>
                    <div className={style.addInfoDiv}>
                        <h2>
                            Add your Category information
                        </h2>
                        <div className={style.addInp}>
                            <div>
                                <label for='name'>Name</label>
                                <input ref={nameRef} id='name' placeholder='name' type='text'/>
                            </div>
                            <div>
                                <label for='slug'>Slug</label>
                                <input ref={slugRef} id='slug' placeholder='slug' type='text'/>
                            </div>
                        </div>

                    </div>
                    <div className={style.addButtonDiv} style={{ bottom: '20px', right: '0', left: '0', position: 'absolute' }}>
                        <button className={style.cancelBtn} onClick={exitFunction}>Cancel</button>
                        <button className={style.addBtn} onClick={addProduct}>{newData.data}</button>
                    </div>
                </div>
            )}
            {(newData?.data === 'Add Offer' || newData?.data === 'Edit Offer') && (
                <div>
                    <div className={style.addImg} >
                        <div>
                            <h2>Upload image</h2>
                            <img className={style.additionalImg} style={{ display: addImg ? 'block' : 'none', marginTop: '10px' }} src={addImg || upload} />
                        </div>
                        <div className={style.addDiv} onClick={handleImageClick}>
                            <input ref={fileInputRef}
                                style={{ display: 'none' }} type='file' onChange={handleImageChange}></input>
                            <Image className={style.uploadImg} src={upload} alt='upload' />
                        </div>
                    </div>
                    <div className={style.addInfoDiv}>
                        <h2>
                            Add your Category information
                        </h2>
                        <div className={style.addInp}>
                            <div>
                                <label for='name'>Title</label>
                                <input ref={nameRef} id='name' placeholder='title' type='text' />
                            </div>
                            <div>
                                <label for='slug'>Description</label>
                                <input id='slug' ref={description} placeholder='description' type='text' />
                            </div>
                        </div>
                    </div>
                    <div className={style.addButtonDiv} style={{ bottom: '20px', right: '0', left: '0', position: 'absolute' }}>
                        <button className={style.cancelBtn} onClick={exitFunction}>Cancel</button>
                        <button className={style.addBtn} onClick={addProduct}>{newData.data}</button>
                    </div>
                </div>
            )}

        </div>

        <div className={style.blackFont} style={{ display: newData.display ? 'block' : 'none' }}></div>
        <div style={{ display: greyFont ? 'block' : 'none' }} className={style.backGrey}></div>
    </>
)
}

export default Form
