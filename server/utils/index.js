// index.js
// Sami Sekucoglu
// 301206417
// Booklist app - Midterm

export function UserDisplayName(req){
    if(req.user){
        return req.user.displayName;
    }
    return '';
}