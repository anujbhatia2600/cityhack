import Board from 'react-trello'
const Kanban = () => {
    const categories = {
        lanes: [
          {
            id: 'year',
            title: 'Yearly Goals and Tasks',
            cards: [],
            style: {backgroundColor: 'white'},
            cardStyle : {backgroundColor: 'lightgrey'}
          },
          {
            id: 'month',
            title: 'Monthly Goals and Tasks',
            cards: [],
            style: {backgroundColor: 'white'},
            cardStyle : {backgroundColor: 'lightgrey'}

          },
          {
            id: 'week',
            title: 'Weekly Goals and Tasks',
            cards: [],
            style: {backgroundColor: 'white'},
            cardStyle : {backgroundColor: 'lightgrey'}

          },
          {
            id: 'completed',
            title: 'Completed Tasks',
            cards: [],
            style: {backgroundColor: 'white'},
            cardStyle : {backgroundColor: 'lightgrey'}

          }
        ]
    }
    return (
        <>
            <h1>My Kanban Board</h1>
            <Board 
                style = {{backgroundColor : '#f4f6f8'}}
                data={categories} editable="True"/>
        </>

    )
}

export default Kanban
