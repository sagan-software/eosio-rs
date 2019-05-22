use crate::{AccountName, Asset};
use eosio_bytes::{NumBytes, Read, Write};
use std::fmt;

#[derive(Debug, PartialEq, Clone, Copy, Default, NumBytes, Read, Write)]
#[eosio_bytes_root_path = "::eosio_bytes"]
pub struct ExtendedAsset {
    pub quantity: Asset,
    pub contract: AccountName,
}

impl fmt::Display for ExtendedAsset {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        write!(f, "{} @ {}", self.quantity, self.contract)
    }
}

// impl Add for ExtendedAsset {
//     type Output = Self;
//     fn add(self, other: Self) -> Self {
//         check(self.contract == other.contract, "type mismatch");
//         ExtendedAsset {
//             quantity: self.quantity + other.quantity,
//             contract: self.contract,
//         }
//     }
// }

// impl AddAssign for ExtendedAsset {
//     fn add_assign(&mut self, other: Self) {
//         check(self.contract == other.contract, "type mismatch");
//         self.quantity += other.quantity
//     }
// }

// impl Sub for ExtendedAsset {
//     type Output = Self;
//     fn sub(self, other: Self) -> Self {
//         check(self.contract == other.contract, "type mismatch");
//         ExtendedAsset {
//             quantity: self.quantity - other.quantity,
//             contract: self.contract,
//         }
//     }
// }

// impl SubAssign for ExtendedAsset {
//     fn sub_assign(&mut self, other: Self) {
//         check(self.contract == other.contract, "type mismatch");
//         self.quantity -= other.quantity
//     }
// }

// impl Mul for ExtendedAsset {
//     type Output = Self;
//     fn mul(self, other: Self) -> Self {
//         check(self.contract == other.contract, "type mismatch");
//         ExtendedAsset {
//             quantity: self.quantity * other.quantity,
//             contract: self.contract,
//         }
//     }
// }

// impl MulAssign for ExtendedAsset {
//     fn mul_assign(&mut self, other: Self) {
//         check(self.contract == other.contract, "type mismatch");
//         self.quantity *= other.quantity
//     }
// }

// impl Div for ExtendedAsset {
//     type Output = Self;
//     fn div(self, other: Self) -> Self {
//         check(self.contract == other.contract, "type mismatch");
//         ExtendedAsset {
//             quantity: self.quantity / other.quantity,
//             contract: self.contract,
//         }
//     }
// }

// impl DivAssign for ExtendedAsset {
//     fn div_assign(&mut self, other: Self) {
//         check(self.contract == other.contract, "type mismatch");
//         self.quantity /= other.quantity
//     }
// }

// impl Rem for ExtendedAsset {
//     type Output = Self;
//     fn rem(self, other: Self) -> Self {
//         check(self.contract == other.contract, "type mismatch");
//         ExtendedAsset {
//             quantity: self.quantity % other.quantity,
//             contract: self.contract,
//         }
//     }
// }

// impl RemAssign for ExtendedAsset {
//     fn rem_assign(&mut self, other: Self) {
//         check(self.contract == other.contract, "type mismatch");
//         self.quantity %= other.quantity
//     }
// }

#[cfg(test)]
mod tests {
    use super::*;
    use eosio_numstr_macros::{n, s};

    macro_rules! test_to_string {
        ($($name:ident, $amount:expr, $symbol:expr, $contract:expr, $expected:expr)*) => ($(
            #[test]
            fn $name() {
                let asset = ExtendedAsset {
                    quantity: Asset {
                        amount: $amount,
                        symbol: $symbol.into(),
                    },
                    contract: $contract.into(),
                };
                assert_eq!(asset.to_string(), $expected);
            }
        )*)
    }

    test_to_string! {
        to_string,
        1_0000,
        s!(4, EOS),
        n!(eosio.token),
        "1.0000 EOS @ eosio.token"

        to_string_signed,
        -1_0000,
        s!(4, EOS),
        n!(eosio.token),
        "-1.0000 EOS @ eosio.token"

        to_string_decimal,
        1_0001,
        s!(4, EOS),
        n!(eosio.token),
        "1.0001 EOS @ eosio.token"

        to_string_zero_precision,
        10_001,
        s!(0, EOS),
        n!(eosio.token),
        "10001 EOS @ eosio.token"

        to_string_zero_precision_signed,
        -10_001,
        s!(0, EOS),
        n!(eosio.token),
        "-10001 EOS @ eosio.token"
    }
}
