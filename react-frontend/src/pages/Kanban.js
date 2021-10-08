import Board from 'react-trello'
import './Kanban.css'
const Kanban = () => {
    const categories = {
        lanes: [
          {
            id: 'year',
            title: 'Yearly Goals and Tasks',
            cards: [
              {
                description: '2 Gallons of milk at the Deli store',
                id: 'Milk',
                label: 'Urgent',
                laneId: 'PLANNED',
                title: 'Buy milk'
              },
            ],
            style: {backgroundColor: 'white'},
            cardStyle : {
              backgroundColor: '#FFDDE2FF'
            }
          },
          {
            id: 'month',
            title: 'Monthly Goals and Tasks',
            cards: [],
            style: {backgroundColor: 'white'},
            cardStyle : {backgroundColor: '#FAA094FF'}

          },
          {
            id: 'week',
            title: 'Weekly Goals and Tasks',
            cards: [],
            style: {backgroundColor: 'white'},
            cardStyle : {backgroundColor: '#9ED9CCFF'}

          },
          {
            id: 'completed',
            title: 'Completed Tasks',
            cards: [],
            style: {backgroundColor: 'white'},
            cardStyle : {backgroundColor: '#008C76FF'}

          }
        ]
    }
    return (
        <>
            <h1>My Kanban Board</h1>
            <Board 
                style = {{backgroundColor : '#f4f6f8'}}
                cardStyle = {{backgroundColor: '#eec'}}
                data={categories} editable="True"/>
        </>

    )
}

export default Kanban
