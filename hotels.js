const APP = (function (){
    const keyword = 'hotel'
    function addSwiper() {
        if (document.body.offsetWidth < 1024) {
            document.querySelectorAll('.' + keyword + 's__grid__wrapper').forEach(el => {
                if (el.firstElementChild.children.length > 3) {
                    el.classList.add('swiper')
                    const div = document.createElement('div')
                    div.classList.add('swiper-button-prev')
                    el.appendChild(div)
                    const div2 = document.createElement('div')
                    div2.classList.add('swiper-button-next')
                    el.appendChild(div2)
                    el.firstElementChild.classList.add('swiper-wrapper')
                    Array.from(el.firstElementChild.children).forEach(child => {
                        child.classList.add('swiper-slide')
                    })
                }
                else {
                    el.classList.add('non-swiper')
                }
            })
        }
        else {
            document.querySelectorAll('.' + keyword + 's__grid__wrapper').forEach(el => {
                el.classList.remove('swiper')
            })
            document.querySelectorAll('.' + keyword + 's__grid').forEach(el => {
                el.classList.remove('swiper-wrapper')
            })
            document.querySelectorAll('.' + keyword + '__box').forEach(el => {
                el.classList.remove('swiper-slide')
            })
        }
    }


    /*              HIDE & SHOW DROPDOWN FILTERS
    */

    document.body.addEventListener('click', (e) => {
        if (e.target.className.includes('filter__dropdown') || e.target.closest('.filter__dropdown')) {
            const dropdown = e.target.closest('.filter__dropdown')
            if (dropdown.className.includes('shown')) {
                console.log('this ran')
                document.querySelectorAll('.filter__dropdown.shown').forEach(dropdown => {
                    dropdown.classList.remove('shown')
                })
            }
            else {
                document.querySelectorAll('.filter__dropdown.shown').forEach(dropdown => {
                    dropdown.classList.remove('shown')
                })
                dropdown.classList.add('shown')
            }
        }
        else {
            if (document.querySelectorAll('.filter__dropdown.shown')) {
                document.querySelectorAll('.filter__dropdown.shown').forEach(dropdown => {
                    dropdown.classList.remove('shown')
                })
            }
        }
    })

    /********************************************************************************/
    /********************************************************************************/

    /*                              General
    */
    const categories_city = []
    const hotel_info = ['hotel_Name', 'hotel_Name_cleared', 'hotel_description', 'hotel_images', 'hotel_Cost', 'hotel_Price', 'hotel_Address', 'hotel_Phone', 'hotel_Spots']
    const hotel_sorts = [hotel_info[0], hotel_info[4], hotel_info[5], hotel_info[6], 'hotel_Spots']
    const container = document.querySelector('.' + keyword + 's__container')
    const items = [
        {
            city: 'Giza',
            hotels: [
                {
                    [hotel_info[0]]: 'Mercedes',
                    [hotel_info[2]]: 'This is a description of a very comfortable wide hotel that has 30 rooms',
                    [hotel_info[3]]: 3,
                    'hotel_Spots': 2
                },
                {
                    [hotel_info[0]]: 'Ferrari',
                    [hotel_info[2]]: 'This is a description of a very comfortable wide hotel that has 30 rooms',
                    [hotel_info[3]]: 3,
                    'hotel_Spots': 3
                },
                {
                    [hotel_info[0]]: 'Girl',
                    [hotel_info[2]]: 'This is a description of a very comfortable wide hotel that has 30 rooms',
                    [hotel_info[3]]: 3,
                    'hotel_Spots': 1
                },
                {
                    [hotel_info[0]]: 'Cat',
                    [hotel_info[2]]: 'This is a description of a very comfortable wide hotel that has 30 rooms',
                    [hotel_info[3]]: 3,
                    'hotel_Spots': 4
                }
            ]
        },
        {
            city: 'Alexandria',
            hotels: [
                {
                    [hotel_info[0]]: 'Ainsi La Vida',
                    [hotel_info[2]]: 'This is a description of a very comfortable wide hotel that has 30 rooms',
                    [hotel_info[3]]: 3
                }
            ]
        },
        {
            city: 'Sharm Al-Sheikh',
            hotels: [
                {
                    [hotel_info[0]]: 'Huricane
                        ',
                    [hotel_info[2]]: 'This is a description of a very comfortable wide hotel that has 30 rooms',
                    [hotel_info[3]]: 3
                },
                {
                    [hotel_info[0]]: 'Huricane
                        ',
                    [hotel_info[2]]: 'This is a description of a very comfortable wide hotel that has 30 rooms',
                    [hotel_info[3]]: 3
                },
                {
                    [hotel_info[0]]: 'Huricane
                        ',
                    [hotel_info[2]]: 'This is a description of a very comfortable wide hotel that has 30 rooms',
                    [hotel_info[3]]: 3
                },
                {
                    [hotel_info[0]]: 'Huricane
                        ',
                    [hotel_info[2]]: 'This is a description of a very comfortable wide hotel that has 30 rooms',
                    [hotel_info[3]]: 3
                }
            ]
        },
        {
            city: 'Hurghada',
            hotels: []
        }
    ]
    items.forEach(item => {
        categories_city.push(item.city)
    })
    function implementCategoriesFilter() {
        categories_city.forEach(category => {
            category_class = category.replaceAll(' ', '_')
            const category_item = document.createElement('LI')
            category_item.classList.add('filter-city-item')
            category_item.classList.add('filter-city__' + category_class)
            const textNode = document.createTextNode(category)
            category_item.appendChild(textNode)
            document.querySelector('.category_city').appendChild(category_item)
        })
    }

    implementCategoriesFilter()

    function implementSorts() {
        hotel_sorts.forEach(sort => {
            sort_text = sort.replaceAll('_', ' ').substring(6, sort.replaceAll('_', ' ').length)
            const sort_item = document.createElement('LI')
            sort_item.classList.add('sortby-item')
            sort_item.classList.add('sortby__' + sort)
            const textNode = document.createTextNode(sort_text)
            sort_item.appendChild(textNode)
            document.querySelector('.sort__by .dropdown__list').appendChild(sort_item)
        })
    }
    implementSorts()

    function implementCategories() {
        categories_city.forEach(category => {
            category_class = category.replaceAll(' ', '_')
            const main_element = document.createElement('div')
            const name_container = document.createElement('div')
            const name_h3 = document.createElement('h3')
            const name_text = document.createTextNode(category)
            const content_wrapper = document.createElement('div')
            const content_grid = document.createElement('div')
            main_element.className = keyword + 's__city city__' + category_class
            name_container.className = 'city__name'
            content_wrapper.className = keyword + 's__grid__wrapper'
            content_grid.className = keyword + 's__grid'
            name_h3.appendChild(name_text)
            name_container.appendChild(name_h3)
            main_element.appendChild(name_container)
            content_wrapper.appendChild(content_grid)
            main_element.appendChild(content_wrapper)
            container.appendChild(main_element)
        })
    }
    implementCategories()

    function implementItems() {
        items.forEach(item => {
            item.hotels.forEach(hotel => {
                const item_box = document.createElement('div')
                item_box.classList.add(keyword + '__box')
                const img_holder = document.createElement('div')
                img_holder.classList.add(keyword + '__image__holder')
                const item_img = document.createElement('img')
                if (hotel.hotel_images > 0 && hotel.hotel_Name) {
                    item_img.src = 'img/' + keyword + 's/' + hotel.hotel_Name.replaceAll(' ', '_') + '-1.jpg'
                }
                else {
                    item_img.src = 'img/blank_item.jpg'
                }
                const item_details = document.createElement('div')
                item_details.classList.add(keyword + '__info')
                const item_title = document.createElement('h4')
                item_title.classList.add(keyword + '__name')
                const item_description = document.createElement('p')
                item_description.classList.add(keyword + '__text')
                const item_button = document.createElement('button')
                item_button.classList.add(keyword + '__btn')
                img_holder.appendChild(item_img)
                item_box.appendChild(img_holder)
                if (hotel.hotel_Name) {
                    item_title.append(hotel.hotel_Name)
                    console.log(hotel.hotel_Name)
                };
                if (hotel.hotel_description) {
                    item_description.append(hotel.hotel_description)
                }
                item_button.append('View')
                item_details.append(item_title, item_description, item_button)
                item_box.appendChild(item_details)
                Object.keys(hotel).forEach((property, i) => {
                    console.log(hotel.values)
                    item_box.setAttribute('data-' + property, Object.values(hotel)[i])
                    item_box.setAttribute('data-property-count', Object.keys(hotel).length)
                })
                console.log(item_box)
                console.log(document.querySelector('.city__' + item.city.replaceAll(' ', '_')))
                if (document.querySelector('.city__' + item.city.replaceAll(' ', '_'))) {
                    document.querySelector('.city__' + item.city.replaceAll(' ', '_') + ' .' + keyword + 's__grid').appendChild(item_box)
                }
            })
        })
    }

    implementItems()

    addSwiper()
    //                              Filter out
    
    document.querySelectorAll('.filter-city-item').forEach(item => {
        item.addEventListener('click', () => {
            const item_class = Array.from(item.classList).find(classs => classs.includes('filter-city__'))
            const item_name = item_class.substring( 13, item_class.length)
            console.log(item_name)
            if (document.querySelector('.city__' + item_name)) {
                document.querySelector('.' + keyword + 's__container').prepend(document.querySelector('.city__' + item_name))
            }
            item.closest('.filter__dropdown').childNodes[0].textContent = item.textContent
        })
    })
    //                              Sort By
    const letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
    
    document.querySelectorAll('.sortby-item').forEach(item => {
        item.addEventListener('click', () => {
            item.closest('.filter__dropdown').childNodes[0].textContent = item.textContent
            let swipeCount;
            if (document.body.offsetWidth < 1024) {
                swipeCount = 3
                if (document.body.offsetWidth < 768) {
                    swipeCount = 2
                    if (swipeCount < 480) {
                        swipeCount = 1
                    }
                }
            }
            const sortname = item.classList[1].substring(8, item.classList[1].length)
            const grids = Array.from(document.querySelectorAll('.' + keyword + 's__grid'))
            let sort_type;
            grids.forEach(parent => {
                console.log(parent.children)
                const slides = Array.from(parent.children)
                const sorted = []
                slides.forEach(slide => {
                    //const attributes = slide.getAttributeNames()
                    //const slide_info = attributes.filter(attribute => attribute.includes('data-hotel'))
                })
                if (slides.find(slide => {
                        if (/^[0-9]*$/.test(slide.getAttribute('data-' + sortname))) {
                            console.log('a slide attribute contains a number')
                            return slide;
                        }
                        else {
                            return undefined;
                        }
                    })) {
                    console.log('sorted by number')
                    sort_type = 'number'
                }
               /* if (slides.find(slide => {
                        console.log(slide.getAttribute('data-' + sortname), /^[A-Za-z]*$/.test(slide.getAttribute('data-' + sortname)), slide)
                        if (slide.getAttribute('data-' + sortname) && /^[A-Za-z]*$/.test(slide.getAttribute('data-' + sortname))) {
                            return slide;
                        }
                        else {
                            return undefined;
                        }
                    })) {
                    console.log('a slide attribute contains a letter')
                }*/
               /* slides.sort((a, b) => {
                    if (a.getAttribute(sortname) )
                })*/
                let sortedArr;
                switch (sort_type) {
                    case 'number':
                        if (sortname.includes('Spot')) {
                            if (parent.closest('.swiper')) {
                                let slidesLength = slides.length;
                                let tobeSpliced = [];
                                slides.forEach((slide,i) => {
                                    if (i+1 <= swipeCount || i+1 > (slides.length - swipeCount)) {
                                        //slides.splice(i ,1)
                                        tobeSpliced.push(i)
                                        slidesLength -= 1
                                    }
                                    console.log(slides.length, i, slidesLength)
                                    slide.remove()
                                })
                                tobeSpliced.forEach(spliceit => slides.splice(spliceit, 1))
                                console.log(slides)
                                sortedArr = slides.sort((a, b) => {
                                if (parseInt(a.getAttribute(sortname)) > parseInt(b.getAttribute(sortname))) {
                                    return 1
                                }
                                else {
                                    return -1
                                }
                            })
                            console.log(sortedArr)
                        }
                    }
                    break
                }
                console.log(sortedArr)
                if (sortedArr && sortedArr.length > 1) {
                    if (parent.closest('.swiper')) {
                        let prependLast = [];
                        sortedArr.forEach((sortedSlide,i) => {
                            if (i+1 > slides.length - swipeCount) {
                                prependLast.push(sortedSlide)
                            }
                            sortedSlide.setAttribute('aria-label', i+1 + ' / ' + sortedArr.length)
                            parent.appendChild(sortedSlide)
                        })
                        prependLast.reverse()
                        prependLast.forEach(prepender => parent.prepend(prepender.cloneNode(true)));
                        sortedArr.forEach((sortedSlide,i) => {
                            if (i+1 <= swipeCount) {
                                parent.append(sortedSlide.cloneNode(true))
                            }
                        })
                    }
                    else {
                        slides.forEach(slide => slide.remove())
                        sortedArr.forEach(sortedSlide => parent.appendChild(sortedSlide))
                    }
                }
            })
        })
    })


})()


