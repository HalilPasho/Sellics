# Sellics

Simple app for images review.

## NOTES

1. Since there is no dedicated API for post request to save a image when approved and then a GET request to show the list in the corresponding component, I did use localStorage.
   It persists the refreshes.
2. In order not to overflow the memory of the localStorage, on every new request (after refreshing the whole app) to the unsplash API, the existing images in localStorage are removed. ONLY on new session.
3. On Reject button, a new request to get a new image is send.
4. On approval, the image is saved to the local Storage and from that i did map the values to the ApprovedList component. It persists the refreshes.
5. Added 2 arrow buttons to scroll horizontally when we have many images approved. (Smoothly)
6. No needed Redux or anything fancy since very few components were created and the state is managed in a good way.
7. Used only Styled component library. Left only 1 example with plain css file. ONLY as example.
8. Added few tests to check if our component is rendered.
9. Mobile friendly.
10. And Pikachu :)
