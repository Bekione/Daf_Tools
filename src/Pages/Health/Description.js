const Description = () => {
    const hydrationTips = [
      {
        tip_title: "Drink water throughout the Night:",
        tip: "Don't wait until you're thirsty to drink water. Aim to drink small amounts of water throughout the day."
      },
      {
        tip_title: "Carry a water bottle with you:",
        tip: "This will make it easy to stay hydrated, even when you're on the go."
      },
      {
        tip_title: "Choose water-rich foods:",
        tip: "Some foods, such as fruits and vegetables, are high in water content. Eating these foods can help you stay hydrated."
      },
      {
        tip_title: "Avoid caffeine and alcohol:",
        tip: "Caffeine and alcohol can dehydrate you, so it's best to limit your intake of these substances."
      }
    ]
   
    const bmiTips = [
      {
        tip_title: "Maintain a healthy weight:",
        tip: "A healthy weight can reduce the risk of many chronic diseases, including heart disease, diabetes and certain cancers."
      },
      {
        tip_title: "Excersise regularly:",
        tip: "Physical activity can help you maintain a healthy weight, reduce your risk of chronic diseases and improve your overall health and wellbeing."
      },
      {
        tip_title: "Eat a balanced & nutritious diet:",
        tip: "Eating a diet that is rich in fruits, vegetables, whole grains, lean proteins and healthy fats can help you maintain a healthy weight and reduce your risk of chronic diseases."
      },
      {
        tip_title: "Limit your intake of high-calorie foods:",
        tip: "Processed and high-calorie foods are often low in nutrients and can contribute to weight gain and chronic diseases if consumed in excess."
      },
      {
        tip_title: "Stay hydrated:",
        tip: "Drinking enough water can help you maintain a healthy weight, improve your energy levels and support your overall health and wellbeing."
      }
    ];
  
    const hydrationLists = hydrationTips.map((tip, index) => {
      return(
        <li className='tip_list' key={index}>
          <p><span className='tip_title'>{tip.tip_title}</span>{tip.tip}</p>
        </li>
      )
    })
    const bmiLists = bmiTips.map((tip, index) => {
      return(
        <li className='tip_list' key={index}>
          <p><span className='tip_title'>{tip.tip_title}</span>{tip.tip}</p>
        </li>
      )
    })
   
    return (
      <>
        <div className='description'> 
          <h2 className='sub_title'>Stay Hydrated</h2>
          <ul>{hydrationLists}</ul>
        </div>
        <div className='description'> 
          <h2 className='sub_title'>Stay In Shape</h2>
          <ul>{bmiLists}</ul>
        </div>
      </>
    )
}

export default Description