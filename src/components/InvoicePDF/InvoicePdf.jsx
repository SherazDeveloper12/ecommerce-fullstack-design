import React from 'react'
import { Document, Page, Text, View, StyleSheet, PDFViewer, Image  } from '@react-pdf/renderer';
import { useSelector } from 'react-redux';
import logo from '../../assets/logo.png';

export default function InvoicePdf() {
  const order = useSelector((state) => state.order.selectedOrder);
  return (
    
    <PDFViewer style={{ width: '100%', height: '100%' }}>
      <InvoicePdfDocument order={order} />
    </PDFViewer>
  )
}


const styles = StyleSheet.create({
  page: {
    backgroundColor: '#ffffff',
    padding: 40,
  },
  container: {
    flex: 1,
  },
  // Header Section
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    flexWrap: 'wrap',
  },
  orderInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  labelText: {
    color: '#404040',
    fontWeight: 'bold',
    fontSize: 12,
  },
  valueText: {
    color: '#737373',
    fontSize: 12,
  },
  // Brand Section
  brandRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
    flexWrap: 'wrap',
  },
  brandContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  brandText: {
    color: '#8CB7F5',
    fontSize: 36,
    fontWeight: 'bold',
  },
  invoiceTitle: {
    fontSize: 36,
    fontWeight: 'bold',
  },
  // Information Sections
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  leftColumn: {
    flex: 1,
    marginRight: 20,
  },
  rightColumn: {
    flex: 1,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 15,
  },
  infoRow: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  infoLabel: {
    fontWeight: 'bold',
    fontSize: 10,
  },
  infoValue: {
    fontSize: 10,
  },
  infoRowDouble: {
    flexDirection: 'row',
    gap: 30,
    marginBottom: 5,
  },
  // Products Table
  table: {
    marginTop: 20,
    marginBottom: 20,
    border: '1px solid #d4d4d8',
    borderRadius: 4,
  },
  tableHeader: {
    flexDirection: 'row',
    backgroundColor: '#262626',
    padding: 10,
    borderBottom: '1px solid #d4d4d8',
  },
  tableHeaderText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 12,
  },
  tableBody: {
    padding: 10,
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  productInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
    flex: 1,
  },
  productImage: {
    width: 50,
    height: 50,
    borderRadius: 4,
  },
  productDetails: {
    flex: 1,
  },
  productTitle: {
    fontSize: 11,
    fontWeight: 'bold',
    marginBottom: 3,
  },
  productQuantity: {
    fontSize: 9,
    color: '#737373',
  },
  productPrice: {
    fontSize: 11,
    fontWeight: 'bold',
  },
  // Totals Section
  totalsContainer: {
    alignItems: 'flex-end',
    marginBottom: 20,
  },
  totalRow: {
    flexDirection: 'row',
    gap: 30,
    marginBottom: 5,
    alignItems: 'center',
  },
  totalLabel: {
    fontWeight: 'bold',
    fontSize: 11,
  },
  totalValue: {
    fontSize: 11,
  },
  totalDivider: {
    borderBottom: '1px solid #737373',
    paddingBottom: 5,
    marginBottom: 5,
  },
  grandTotal: {
    fontWeight: 'bold',
    fontSize: 12,
  },
  // Footer
  footer: {
    backgroundColor: '#404040',
    padding: 10,
    marginTop: 30,
    textAlign: 'center',
  },
  footerText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 12,
  },
});

const InvoicePdfDocument = ({ order }) => {
  const subtotal = order.items.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const total = subtotal + order.deliveryCharges;

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.container}>
          {/* Header with Order ID and Invoice Number */}
          <View style={styles.headerRow}>
            <View style={styles.orderInfo}>
              <Text style={styles.labelText}>Order ID:</Text>
              <Text style={styles.valueText}>#{order._id}</Text>
            </View>
            <View style={styles.orderInfo}>
              <Text style={styles.labelText}>Invoice Number:</Text>
              <Text style={styles.valueText}>#124515</Text>
            </View>
          </View>

          {/* Brand and Invoice Title */}
          <View style={styles.brandRow}>
            <View style={styles.brandContainer}>
              <Image src={logo} style={styles.logo} />
              <Text style={styles.brandText}>Brand</Text>
            </View>
            <Text style={styles.invoiceTitle}>INVOICE</Text>
          </View>

          {/* Information Section */}
          <View style={styles.infoContainer}>
            {/* Left Column: Shipping & Billing */}
            <View style={styles.leftColumn}>
              {/* Shipping Information */}
              <Text style={styles.sectionTitle}>Shipping Information</Text>
              <View style={styles.infoRow}>
                <Text style={styles.infoLabel}>Shipping to: </Text>
                <Text style={styles.infoValue}>{order.shippingAddress.fullName}</Text>
              </View>
              <View style={styles.infoRowDouble}>
                <View style={styles.infoRow}>
                  <Text style={styles.infoLabel}>City: </Text>
                  <Text style={styles.infoValue}>{order.shippingAddress.city}</Text>
                </View>
                <View style={styles.infoRow}>
                  <Text style={styles.infoLabel}>Country: </Text>
                  <Text style={styles.infoValue}>{order.shippingAddress.country}</Text>
                </View>
              </View>
              <View style={styles.infoRow}>
                <Text style={styles.infoLabel}>Postal Code: </Text>
                <Text style={styles.infoValue}>{order.shippingAddress.postalZipCode}</Text>
              </View>
              <View style={styles.infoRow}>
                <Text style={styles.infoLabel}>Shipping Address: </Text>
                <Text style={styles.infoValue}>{order.shippingAddress.addressLine1}</Text>
              </View>

              {/* Billing Information */}
              <Text style={styles.sectionTitle}>Billing Information</Text>
              <View style={styles.infoRow}>
                <Text style={styles.infoLabel}>Billing to: </Text>
                <Text style={styles.infoValue}>{order.billingAddress.fullName}</Text>
              </View>
              <View style={styles.infoRowDouble}>
                <View style={styles.infoRow}>
                  <Text style={styles.infoLabel}>City: </Text>
                  <Text style={styles.infoValue}>{order.billingAddress.city}</Text>
                </View>
                <View style={styles.infoRow}>
                  <Text style={styles.infoLabel}>Country: </Text>
                  <Text style={styles.infoValue}>{order.billingAddress.country}</Text>
                </View>
              </View>
              <View style={styles.infoRow}>
                <Text style={styles.infoLabel}>Postal Code: </Text>
                <Text style={styles.infoValue}>{order.billingAddress.postalZipCode}</Text>
              </View>
              <View style={styles.infoRow}>
                <Text style={styles.infoLabel}>Billing Address: </Text>
                <Text style={styles.infoValue}>{order.billingAddress.addressLine1}</Text>
              </View>
            </View>

            {/* Right Column: Contact & Delivery */}
            <View style={styles.rightColumn}>
              {/* Contact Details */}
              <Text style={styles.sectionTitle}>Contact Details</Text>
              <View style={styles.infoRow}>
                <Text style={styles.infoLabel}>Customer: </Text>
                <Text style={styles.infoValue}>{order.username}</Text>
              </View>
              <View style={styles.infoRow}>
                <Text style={styles.infoLabel}>Email: </Text>
                <Text style={styles.infoValue}>{order.email}</Text>
              </View>
              <View style={styles.infoRow}>
                <Text style={styles.infoLabel}>Phone Number: </Text>
                <Text style={styles.infoValue}>{order.phoneNumber}</Text>
              </View>
              <View style={styles.infoRow}>
                <Text style={styles.infoLabel}>Order ID: </Text>
                <Text style={styles.infoValue}>#{order._id}</Text>
              </View>

              {/* Delivery Details */}
              <Text style={styles.sectionTitle}>Delivery Details</Text>
              <View style={styles.infoRow}>
                <Text style={styles.infoLabel}>Order Placed At: </Text>
                <Text style={styles.infoValue}>{new Date(order.createdAt).toLocaleDateString()}</Text>
              </View>
              <View style={styles.infoRow}>
                <Text style={styles.infoLabel}>Expected Delivery At: </Text>
                <Text style={styles.infoValue}>
                  {new Date(new Date(order.createdAt).getTime() + 3 * 24 * 60 * 60 * 1000).toLocaleDateString()}
                </Text>
              </View>
            </View>
          </View>

          {/* Products Table */}
          <View style={styles.table}>
            <View style={styles.tableHeader}>
              <Text style={styles.tableHeaderText}>Product Details</Text>
              <Text style={styles.tableHeaderText}>Price</Text>
            </View>
            <View style={styles.tableBody}>
              {order.items.map((item, index) => (
                <View key={index} style={styles.tableRow}>
                  <View style={styles.productInfo}>
                    {item.product.img && item.product.img[0] && (
                      <Image src={item.product.img[0]} style={styles.productImage} />
                    )}
                    <View style={styles.productDetails}>
                      <Text style={styles.productTitle}>{item.product.title}</Text>
                      <Text style={styles.productQuantity}>Quantity: {item.quantity}</Text>
                    </View>
                  </View>
                  <Text style={styles.productPrice}>${item.product.price * item.quantity}</Text>
                </View>
              ))}
            </View>
          </View>

          {/* Totals Section */}
          <View style={styles.totalsContainer}>
            <View style={styles.totalRow}>
              <Text style={styles.totalLabel}>Subtotal:</Text>
              <Text style={styles.totalValue}>${subtotal}</Text>
            </View>
            <View style={[styles.totalRow, styles.totalDivider]}>
              <Text style={styles.totalLabel}>Delivery Charges:</Text>
              <Text style={styles.totalValue}>${order.deliveryCharges}</Text>
            </View>
            <View style={styles.totalRow}>
              <Text style={styles.grandTotal}>Total:</Text>
              <Text style={styles.grandTotal}>${total}</Text>
            </View>
          </View>

          {/* Footer */}
          <View style={styles.footer}>
            <Text style={styles.footerText}>Thank You for your business!</Text>
          </View>
        </View>
      </Page>
    </Document>
  );
};
