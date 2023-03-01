// Convert Htmldocuments to Array
export function convertHtmlCollectionstoArray(array) {
    return Array.prototype.slice.call(array)
}

// To create observers for paragraphs and advertisments
export function createObserver(objectToObserve, threshold = 1) {
    return (
        new IntersectionObserver(entries => {
            entries.forEach(entry => {
                entry.target.classList.toggle(objectToObserve, entry.isIntersecting)
                if (entry.isIntersecting) {
                    objectToObserve.unobserve(entry.target)
                }
            })
        },
            {
                threshold: threshold,
            }   
        )
    )
}

// To Attach observer to each of the element that is matched with the classname/id
export function observeAllElements(arr,observer) {
    return (
        arr.forEach((slot) => {
            observer.observe(slot)
        })
    )
}