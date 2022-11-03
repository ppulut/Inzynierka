import * as React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
//import TextField from "@mui/material/TextField";
//import MenuItem from "@mui/material/MenuItem";
//import moment from 'moment';
import { ViewState, EditingState } from "@devexpress/dx-react-scheduler";
import {
  Scheduler,
  WeekView,
  Toolbar,
  DateNavigator,
  Appointments,
  AllDayPanel,
  Resources,
  MonthView,
  AppointmentTooltip,
  AppointmentForm,
  EditRecurrenceMenu,
  DragDropProvider,
} from "@devexpress/dx-react-scheduler-material-ui";
import { owners } from "../demo-data/tasks";
import { appointments, resourcesData } from "../demo-data/resources";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const PREFIX = "Demo";

const classes = {
  container: `${PREFIX}-container`,
  text: `${PREFIX}-text`
};

const StyledDiv = styled("div")(({ theme }) => ({
  [`&.${classes.container}`]: {
    display: "flex",
    marginBottom: theme.spacing(2),
    justifyContent: "flex-end"
  },
  [`& .${classes.text}`]: {
    ...theme.typography.h6,
    marginRight: theme.spacing(2)
  }
}));

const allDayLocalizationMessages = {
  "pl-PL": {
    allDay: "Cały dzień"
  },
  /*"en-US": {
    allDay: "All Day"
  }*/
};

const getAllDayMessages = (locale) => allDayLocalizationMessages[locale];
/*
const StyledWeekViewDayScaleCell = styled(WeekView.DayScaleCell)({
    [`&.${classes.dayScaleCell}`]: {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    },
  });
  
  const formatDayScaleDate = (date, options) => {
    const momentDate = moment(date);
    const { weekday } = options;
    return momentDate.format(weekday ? 'dddd' : 'D');
  };
  const formatTimeScaleDate = date => moment(date).format('hh:mm');
  
  const DayScaleCell = ((
    { formatDate, ...restProps },
  ) => (
    <StyledWeekViewDayScaleCell
      {...restProps}
      formatDate={formatDayScaleDate}
      className={classes.dayScaleCell}
    />
  ));
  const TimeScaleLabel = (
    { formatDate, ...restProps },
  ) => <WeekView.TimeScaleLabel {...restProps} formatDate={formatTimeScaleDate} />;

*/
/*const LocaleSwitcher = ({ onLocaleChange, currentLocale }) => (
  <StyledDiv className={classes.container}>
    <div className={classes.text}>Locale:</div>
    <TextField
      select
      variant="standard"
      value={currentLocale}
      onChange={onLocaleChange}
    >
    </TextField>
  </StyledDiv>
);*/


export default class Demo extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
        data: appointments,
        resources: [
            {
              fieldName: "usługa",
              title: "Usługa",
              instances: owners,
              allowMultiple: true
            }
          ],
        currentDate: "2022-11-3",
        locale: "pl-PL",
      };
    
      this.commitChanges = this.commitChanges.bind(this);
    }
    
    commitChanges({ added, changed, deleted }) {
      this.setState((state) => {
        let { data } = state;
        if (added) {
          const startingAddedId = data.length > 0 ? data[data.length - 1].id + 1 : 0;
          data = [...data, { id: startingAddedId, ...added }];
        }
        if (changed) {
          data = data.map(appointment => (
            changed[appointment.id] ? { ...appointment, ...changed[appointment.id] } : appointment));
        }
        if (deleted !== undefined) {
          data = data.filter(appointment => appointment.id !== deleted);
        }
        return { data };
      });


    this.changeLocale = (event) =>
      this.setState({ locale: event.target.value });
  }

  

  render() {
    const { data, currentDate, locale, resources } = this.state;
        /*<LocaleSwitcher
          currentLocale={locale}
          onLocaleChange={this.changeLocale}
        />*/
    return (
      <div>
        <Navbar/>
    <Paper>
          <Scheduler data={data} locale={locale} height={660}>
            <ViewState defaultCurrentDate={currentDate} />
            <WeekView startDayHour={9} endDayHour={19} />
            <Toolbar />
            <DateNavigator />
            <AllDayPanel messages={getAllDayMessages(locale)} />

            <EditingState
            onCommitChanges={this.commitChanges}
          />
          <EditRecurrenceMenu />

          <MonthView />
          <Appointments />
          <AppointmentTooltip
            showOpenButton
          />
          <AppointmentForm />

          <Resources
            data={resources}
            mainResourceName="roomId"
          />
          <DragDropProvider />
          </Scheduler>
        </Paper>
        <Footer/>
      </div>
    );
  }
}
