import {
  PDFDownloadLink,
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";
import React from "react";

const Ticket = ({
  fullName,
  movieTitle,
  quantity,
  discount,
  total,
  poster,
}) => {
  const ticketSections = [];

  for (let i = 0; i < quantity; i++) {
    ticketSections.push(
      <View style={styles.ticketSection} key={i}>
        {/* Card-like div for ticket */}
        <View style={styles.ticketCard}>
          {/* Left side of the card */}
          <View style={styles.ticketLeft}>
            <Image style={styles.movieImage} src={poster} />
          </View>
          {/* Right side of the card */}
          <View style={styles.ticketRight}>
            <Text style={styles.movieName}>{movieTitle}</Text>
            <Text style={styles.movieDetails}>Date: 2023/01/01</Text>
            <Text style={styles.movieDetails}>Price: $10.00</Text>
          </View>
        </View>
      </View>
    );
  }

  return (
    <Document>
      <Page style={styles.page}>
        <View style={styles.section}>
          {/* Ticket Flicks with red background */}
          <View style={styles.ticketFlicks}>
            <Text style={styles.title}>Ticket Flicks</Text>
          </View>

          {/* Invoice section */}
          <Text style={styles.subtitle}>Invoice</Text>

          <View style={styles.invoiceContainer}>
            {/* Left div in the invoice section */}
            <Text style={styles.subtitle}>Invoice to {fullName}</Text>
            <Text style={styles.info}>Address</Text>
            <Text style={styles.info}>City, Country</Text>

            {/* Purchase Details table */}
            <Text style={styles.subtitle}>Purchase Details</Text>
            <View style={styles.table}>
              <View style={styles.tableRow}>
                <Text style={styles.tableHeader}>Movie Title</Text>
                <Text style={styles.tableHeader}>Quantity</Text>
                <Text style={styles.tableHeader}>Discount</Text>
                <Text style={styles.tableHeader}>Total</Text>
              </View>
              <View style={styles.tableRow}>
                <Text style={styles.tableCell}>{movieTitle}</Text>
                <Text style={styles.tableCell}>{quantity}</Text>
                <Text style={styles.tableCell}>{discount}</Text>
                <Text style={styles.tableCell}>{total}</Text>
              </View>
            </View>

            {/* Invoice Total */}
            <Text style={styles.invoiceTotal}>Invoice Total: {total}</Text>

            {/* Ticket Section */}
            {ticketSections}
          </View>
        </View>
      </Page>
    </Document>
  );
};

// Rest of the styles remain unchanged




const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    margin: 10,
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
    fontWeight: "bold",
    color: "#fff", // White text
  },
  ticketFlicks: {
    backgroundColor: "red",
    padding: 10,
    marginBottom: 20,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 8,
    fontWeight: "bold",
    color: "#555", // Gray
  },
  info: {
    fontSize: 12,
    marginLeft: 30,
    marginBottom: 4,
    color: "#666", // Light gray
  },
  table: {
    display: "table",
    width: "100%",
    borderStyle: "solid",
    borderWidth: 1,
    marginBottom: 10,
  },
  tableRow: {
    flexDirection: "row",
    borderBottomColor: "#ccc", // Light gray
    borderBottomWidth: 1,
  },
  tableHeader: {
    fontWeight: "bold",
    textAlign: "center",
    padding: 8,
    backgroundColor: "#f0f0f0", // Light gray
    flex: 1,
  },
  tableCell: {
    textAlign: "center",
    padding: 8,
    flex: 1,
  },
  header: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  invoiceContainer: {
    marginBottom: 20,
  },
  invoiceLeft: {
    flex: 1,
    flexDirection: "column",
  },
  invoiceRight: {
    flex: 1,
    marginLeft: 20,
    flexDirection: "column",
  },
  invoiceTotal: {
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 10,
  },
  scissorContainer: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  scissorIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  horizontalLine: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: "#000",
  },
  ticketSection: {
    marginTop: 20,
  },
  ticketCard: {
    flexDirection: "row",
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
  },
  ticketLeft: {
    marginRight: 10,
  },
  movieImage: {
    width: 80,
    height: 120,
    borderRadius: 8,
  },
  ticketRight: {
    flex: 1,
  },
  movieName: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  movieDetails: {
    fontSize: 12,
    color: "#666",
  },
});

export default Ticket;
