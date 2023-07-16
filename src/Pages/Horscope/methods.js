// Helper method to handle and manipulate date recieved from the user

const findZodiac = (date, signs) => {
    const dob = new Date(date);
    const month = dob.getMonth() + 1;
    const day = dob.getDate();
    const inputDate = new Date(`${new Date().getFullYear()}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`) //YYYY-MM-DD format

    for(const sign of signs){
        const startDate = new Date(`${new Date().getFullYear()}-${sign.startDate}`)
        const endDate = new Date(`${new Date().getFullYear()}-${sign.endDate}`)
 
        if(inputDate >= startDate && inputDate <= endDate){
            return sign
        }
    }

    return null;
}

export  const calculateAge = (dob) => {
    const now = new Date();
    const dateOfBirth = new Date(dob)
    const timeDiff = Math.abs(now - dateOfBirth);

    const units = [
        { label: "years", ms: 1000 * 60 * 60 * 24 * 365.25 },
        { label: "months", ms: 1000 * 60 * 60 * 24 * 30.44 },
        { label: "weeks", ms: 1000 * 60 * 60 * 24 * 7 },
        { label: "days", ms: 1000 * 60 * 60 * 24 },
        { label: "hours", ms: 1000 * 60 * 60 },
        { label: "minutes", ms: 1000 * 60 },
        { label: "seconds", ms: 1000 }
      ];

      let remainingMs = timeDiff;
      const result = {};
      
      units.forEach(unit => {
        const value = Math.floor(remainingMs / unit.ms);
        if (value > 0) {
          result[unit.label] = value;
          remainingMs -= value * unit.ms;
        }else {
            result[unit.label] = value;
        }
      });

    return result;
}

export const dateFormatter = (date) => {
    date = String(date)
    const dateInp = new Date(date);
    const month = dateInp.toLocaleString('default', {month: 'long'});
    const day = dateInp.getDate();
    return `${month} ${day}`;
}

export const isBrithDay = (date) => {
    const dob = new Date(date);
    const month = dob.getMonth() + 1;
    const day = dob.getDate();
    if((month === new Date().getMonth() + 1) && (day === new Date().getDate())){
        return true
    }
    
    return false
}

export const changeBg = (element, color) => {
    element.style.background = 'none';
    if(Array.isArray(color)){
        element.style.backgroundImage = `linear-gradient(-45deg, ${color})`;
        element.style.backgroundSize = '400% 400%';
        element.style.animation = 'gradient 12s ease infinite';
    } else element.style.backgroundColor = color;
}

export default findZodiac