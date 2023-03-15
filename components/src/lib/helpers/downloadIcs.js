export function fetchDowload(event) {
  let response;
  fetch(`https://calendarapi.boomform.com/calendars/${event.cid}/export`, {
    method: "POST",
    body: JSON.stringify({ event_ids: [event.id] }),
  })
    .then((response) => {
      response.json();
    })
    .then((data) => {
      response = data;
      console.log(data, "data");
    });
  console.log(response, "response");
  return response;
}

export function downloadIcs(data) {
  const url = window.URL.createObjectURL(new Blob([data]));
  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", "Calendar.ics");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
