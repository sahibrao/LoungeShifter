class TimeSlot {
  constructor(day, time) {
    this.day = day;
    this.time = time;
    this.participants = [];
  }
}

class When2meet {
  constructor() {
    this.days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
    this.timeSlots = [];
    this.createTimeSlots();
    this.renderTimeSlots();
  }

  createTimeSlots() {
    const timeOptions = [
      "9:00 AM",
      "11:00 AM",
      "1:00 PM",
      "3:00 PM",
      "5:00 PM",
    ];

    for (const day of this.days) {
      for (const time of timeOptions) {
        this.timeSlots.push(new TimeSlot(day, time));
      }
    }
  }

  renderTimeSlots() {
    const timeSlotsContainer = document.getElementById("timeSlots");

    for (const slot of this.timeSlots) {
      const slotDiv = document.createElement("div");
      slotDiv.classList.add("time-slot");
      slotDiv.innerHTML = `<strong>${slot.day} - ${slot.time}</strong><div class="participants">Participants: ${slot.participants.length}</div>`;
      timeSlotsContainer.appendChild(slotDiv);
    }
  }

  markAvailability(day, time, participant) {
    const slot = this.timeSlots.find(
      (slot) => slot.day === day && slot.time === time
    );
    if (slot) {
      slot.participants.push(participant);
      const slotDiv = document.querySelector(
        `.time-slot strong:contains('${day} - ${time}')`
      ).parentElement;
      slotDiv.querySelector(
        ".participants"
      ).textContent = `Participants: ${slot.participants.length}`;
      console.log(`${participant} is available on ${day} at ${time}`);
    } else {
      console.log(`Invalid day or time`);
    }
  }
}

// Example usage
const when2meet = new When2meet();
when2meet.markAvailability("Monday", "9:00 AM", "Alice");
when2meet.markAvailability("Monday", "9:00 AM", "Bob");
when2meet.markAvailability("Monday", "11:00 AM", "Charlie");
