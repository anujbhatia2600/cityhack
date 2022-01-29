import { Helmet } from 'react-helmet'
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
            description: 'Construction of new processing facility',
            id: 'processing facility',
            label: 'Urgent',
            laneId: 'PLANNED',
            title: 'Processing Facility'
          },
        ],
        style: { backgroundColor: 'white' },
        cardStyle: {
          backgroundColor: '#FFDDE2FF'
        }
      },
      {
        id: 'month',
        title: 'Monthly Goals and Tasks',
        cards: [
          {
            description: 'Development of Calamansi Learning Site with IDOFS',
            id: 'learning-site',
            label: 'Medium',
            laneId: 'PLANNED',
            title: 'Learning Site'
          },
          {
            description: 'Renovation of existing office/meeting hall',
            id: 'renovation',
            label: 'low',
            laneId: 'PLANNED',
            title: 'Office Renovation'
          },
        ],
        style: { backgroundColor: 'white' },
        cardStyle: { backgroundColor: '#FAA094FF' }

      },
      {
        id: 'week',
        title: 'Weekly Goals and Tasks',
        cards: [
          {
            description: 'Calamansi Production Technology Trainings',
            id: 'Calamansi-tech',
            label: 'Urgent',
            laneId: 'PLANNED',
            title: 'Technology Trainings'
          },
        ],
        style: { backgroundColor: 'white' },
        cardStyle: { backgroundColor: '#9ED9CCFF' }

      },
      {
        id: 'completed',
        title: 'Completed Tasks',
        cards: [
          {
            description: 'Construction of water refilling station',
            id: 'water-station',
            label: 'Medium',
            laneId: 'PLANNED',
            title: 'Water Station'
          },
        ],
        style: { backgroundColor: 'white' },
        cardStyle: { backgroundColor: '#008C76FF' }

      }
    ]
  }
  return (
    <>
      <Helmet>
        <title>Documentation</title>
      </Helmet>
      <h1>My Kanban Board</h1>
      <Board
        style={{ backgroundColor: '#f4f6f8' }}
        cardStyle={{ backgroundColor: '#eec' }}
        data={categories} editable="True" />
    </>

  )
}

export default Kanban
