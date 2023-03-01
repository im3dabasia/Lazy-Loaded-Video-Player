/*
    Method used to achieve feature: Intersection Observer WEB API
    DATE:01/03/2023
*/

//  Observer to Advertisement video slots
const advertisementVideoObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("show-video-advertisment", entry.isIntersecting)
        if (entry.isIntersecting) 
            advertisementVideoObserver.unobserve(entry.target)
    })
},
    {
        threshold: 0.5,
    }
)
const advertisementSlots = document.getElementsByClassName("video-advertisment")

const advertisementSlots_Array = Array.prototype.slice.call(advertisementSlots)
advertisementSlots_Array.forEach((slot) => {
    advertisementVideoObserver.observe(slot)
})

/*
    For Paragraphs animation Intersection observer
    The threshold here is 1 == 100%
    This means show-para will be added iff its 100%. 

    entry.isIntersecting will return us a boolean
*/

//  Observer to paragraphs in the Blog
const paraObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("show-para", entry.isIntersecting)
        if (entry.isIntersecting) {
            paraObserver.unobserve(entry.target)
        }
    })
},
    {
        threshold: 1,
        rootMargin: "100px",
    }
)

const paragraphs = document.getElementsByClassName("para")
console.log(paragraphs)

// Convert Htmldocuments to Array
let arr = Array.prototype.slice.call(paragraphs)
arr.forEach((para) => {
    paraObserver.observe(para)
    console.log("hello")
})


